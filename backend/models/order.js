const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  items: Array,

  totalAmount: Number,

  paymentMethod: String,

  address: String,

  // ✅ ADD THIS
  userId: String,

  status: {
    type: String,
    default: "Preparing"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Order",
  orderSchema
);