import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";

import { applyMiddleware } from "./src/middleware/middleware.js";
import { logger } from "./src/middleware/logger.js";
import imageRouter from "./src/router/uploadRouter.js";

// Middleware configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const server = express();

// Apply middlewares
applyMiddleware();

server.use(logger);

// Routes
server.use("/api/upload", upload.single('image'), imageRouter);

server.all("*", (req, res) => {
  res.status(404).json({ status: "404 :(" });
});

const PORT = process.env.PORT;

// Start listening
server.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});










