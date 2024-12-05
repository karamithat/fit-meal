const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

// .env Ayarları
dotenv.config();

// MongoDB Bağlantısı
dbConnect();

// Uygulama Tanımlama
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Server Başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
