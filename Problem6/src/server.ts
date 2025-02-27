import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/db";
import scoreRoutes from "./routes/score.route";

dotenv.config();
const app = express();
const server = http.createServer(app);
export const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

// Kết nối MongoDB
connectDB();

// API Routes
app.use("/scores", scoreRoutes);

// WebSocket Connection
io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("disconnect", () => console.log("User disconnected"));
});

// Khởi động Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
