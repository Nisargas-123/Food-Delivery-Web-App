const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const Menu = require("./models/Menu");
const Order = require("./models/order");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ================= DATABASE =================

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => {
    console.error("DB Error:", err.message);
    process.exit(1);
  });

// ================= TEST =================

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ================= MENU =================

app.get("/menu", async (req, res) => {
  try {
    const { category, restaurant } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (restaurant) filter.restaurant = restaurant;

    const menu = await Menu.find(filter);

    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= ORDERS =================

// ✅ CREATE ORDER
app.post("/api/orders", async (req, res) => {
  try {
    const {
  items,
  totalAmount,
  paymentMethod,
  address,
  userId
} = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const newOrder = new Order({
  items,
  totalAmount,
  paymentMethod,
  address,
  userId,
  status: "Preparing"
});

    await newOrder.save();

    // 🔥 AUTO TRACKING SYSTEM
    setTimeout(async () => {
      await Order.findByIdAndUpdate(newOrder._id, {
        status: "Out for Delivery"
      });
    }, 10000);

    setTimeout(async () => {
      await Order.findByIdAndUpdate(newOrder._id, {
        status: "Delivered"
      });
    }, 20000);

    res.json(newOrder);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ORDERS
// ✅ GET USER ORDERS
app.get("/api/orders/:userId", async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
});

// ================= AUTH =================

// ✅ SIGNUP
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, mobile, dob, address } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      dob,
      address
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Signup successful",
      user: newUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({
      success: true,
      message: "Login successful",
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= SEARCH =================

app.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";

    if (!query.trim()) return res.json([]);

    const results = await Menu.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } }
      ]
    }).limit(8);

    res.json(results);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});