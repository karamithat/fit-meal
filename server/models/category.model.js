const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("category", categorySchema);
