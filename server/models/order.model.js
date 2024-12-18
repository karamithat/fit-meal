const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    meals: [
      {
        mealId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "meal",
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }, // pending, preparing, delivered
    deliveryAddress: {
      type: mongoose.Schema.ObjectId,
      ref: "address",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
