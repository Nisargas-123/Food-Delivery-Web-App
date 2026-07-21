import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ ADD BACKGROUND IMAGE
import bg from "./assets/login-background.png";
import upiQr from "./assets/upi-qr.jpeg";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [address, setAddress] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  const placeOrder = async () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    try {
      const cleanCart = cart.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));

      const user = JSON.parse(
  localStorage.getItem("user")
);

await axios.post(
  "http://localhost:5000/api/orders",
  {
    items: cleanCart,
    totalAmount: total,
    paymentMethod,
    address,
    userId: user._id
  }
);

      alert("Order placed successfully");

      setCart([]);
      localStorage.removeItem("cart");

      navigate("/orders");

    } catch (err) {
      console.log(err);
      alert("Order failed");
    }
  };

  return (
    <div style={styles.container}>

      <h2 style={styles.title}>Checkout</h2>

      <div style={styles.wrapper}>

        {/* 🛒 LEFT */}
        <div style={styles.card}>
          <h3>Order Summary</h3>

          {cart.map(item => (
            <div key={item._id} style={styles.itemCard}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 💳 RIGHT */}
        <div style={styles.card}>
          <h3>Payment & Address</h3>

          <textarea
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.textarea}
          />

          <div style={styles.paymentBox}>
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label>
  <input
    type="radio"
    value="UPI"
    checked={paymentMethod === "UPI"}
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  UPI
</label>

{paymentMethod === "UPI" && (

  <div style={{
    marginTop: "15px",
    textAlign: "center"
  }}>

    <img
      src={upiQr}
      alt="UPI QR"
      style={{
        width: "180px",
        borderRadius: "12px",
        marginBottom: "10px"
      }}
    />

    <input
      type="text"
      placeholder="Enter UPI Number"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginTop: "10px"
      }}
    />

    <p style={{
      fontSize: "13px",
      color: "#555",
      marginTop: "10px"
    }}>
      Scan QR or enter UPI number
      before placing order
    </p>

  </div>
)}

            <label>
  <input
    type="radio"
    value="Card"
    checked={paymentMethod === "Card"}
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  Debit / Credit Card
</label>

{paymentMethod === "Card" && (

  <div style={{
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }}>

    <input
  type="password"
  placeholder="Card Number"
  maxLength="16"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />

    <input
      type="text"
      placeholder="Card Holder Name"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc"
      }}
    />

    <div style={{
      display: "flex",
      gap: "10px"
    }}>

      <input
        type="text"
        placeholder="MM/YY"
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <input
        type="password"
        placeholder="CVV"
        maxLength="3"
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

    </div>

  </div>
)}
          </div>

          <div style={styles.bill}>
            <p>Subtotal: ₹{subtotal}</p>
            <p>Delivery Fee: ₹{deliveryFee}</p>
            <h3>Total: ₹{total}</h3>
          </div>

          <button onClick={placeOrder} style={styles.button}>
            Place Order
          </button>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    backgroundImage: `url(${bg})`, // 🔥 BACKGROUND ADDED
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "white"
  },

  wrapper: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    width: "350px",
    background: "rgba(255,255,255,0.9)", // 🔥 GLASS EFFECT
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  },

  itemCard: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    alignItems: "center"
  },

  image: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    objectFit: "cover"
  },

  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },

  paymentBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px"
  },

  bill: {
    borderTop: "1px solid #eee",
    paddingTop: "10px",
    marginBottom: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#6f42c1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Checkout;