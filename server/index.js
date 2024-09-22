import dotenv from "dotenv";
dotenv.config();
import express from "express";


export const server = express();

//Connect to Database
import {connectDB} from './src/config/db.js'
connectDB();



//Applying Midddlewares
import { applyMiddleware } from "./src/middleware/middleware.js";
applyMiddleware();


//routes
import { userRouter } from "./src/router/userRouter.js";
  
server.use("/api/user", userRouter);
server.all("*", (req, res) => {
  res.json({
    status: "Not Found",
  });
}); 

//Server Listening
server.listen(process.env.PORT, () => {
  console.log("Hello World");
  console.log("SERVER IS LISTENING...");
});
