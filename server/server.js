import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./routes/user.route.js";
import bodyParser from "body-parser";

// .env Ayarları
dotenv.config();

// MongoDB Bağlantısı
dbConnect();

// Uygulama Tanımlama
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE", // İzin verilen HTTP yöntemleri
  })
);
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use("/api/user", userRouter);

// Server Başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
