import dotenv from "dotenv";
dotenv.config();
import express from "express";

export const server = express();


// sudo service mongodb start
//Applying Midddlewares
import { applyMiddleware } from "./src/middleware/middleware.js";
import { logger } from "./src/middleware/logger.js";
server.all('*', logger) 
applyMiddleware();

// Use the request logger.
import imageRouter from "./src/router/uploadRouter.js";
import multer from "multer";

server.all("*", logger);

//routes

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

server.use("/api/upload", upload.single('image'), imageRouter);





server.all("*", (req, res) => {
  res.json({
    status: "404 :(",
  });
});




//Server Listening
server.listen(process.env.PORT, () => {
  console.log("SERVER IS LISTENING...");
  console.log(`http://localhost:${process.env.PORT}`);
});
