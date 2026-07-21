const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  dob: String,
  address: String   // ✅ NEW
});

module.exports = mongoose.model("User", userSchema);