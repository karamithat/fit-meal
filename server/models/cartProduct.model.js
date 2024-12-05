import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema(
  {
    mealId: {
      type: mongoose.Schema.ObjectId,
      ref: "meal",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const CartProductModel = mongoose.model("cartProduct", cartProductSchema);

export default CartProductModel;
