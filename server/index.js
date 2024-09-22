import express from "express";
import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import { applyMiddleware } from "./middleware/middleware.js";
dotenv.config();
// connectDB();
export const server = express();
// applyMiddleware();

server.listen(process.env.PORT, () => {
  console.log("SERVER IS LISTENING...");
});