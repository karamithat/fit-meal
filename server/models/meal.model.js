const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Meal name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Meal description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Meal price is required"],
      min: [0, "Price cannot be negative"],
    },
    calories: {
      type: Number,
      required: [true, "Calories information is required"],
      min: [0, "Calories cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Meal category is required"],
      enum: [
        "vegan",
        "vegetarian",
        "protein",
        "low-carb",
        "keto",
        "gluten-free",
      ],
    },
    image: {
      type: String,
      required: [true, "Meal image is required"],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("meal", mealSchema);
