const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
    amount: { type: Number, required: true },
    method: { type: String, required: true }, // e.g., Credit Card, PayPal
    status: { type: String, default: "completed" }, // completed, failed
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", paymentSchema);
