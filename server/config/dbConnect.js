const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Please provide MONGODB_URI in the .env file");
}

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected DB");
  } catch (error) {
    console.log("MongoDb connect error", error);
    process.exit(1);
  }
}
module.exports = dbConnect;
