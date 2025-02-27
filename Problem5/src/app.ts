import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/user.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Connect to DB
connectDB();

export default app;
