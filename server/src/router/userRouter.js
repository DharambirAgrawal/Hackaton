import express from "express";

import { registerUser,signupUser } from "../controller/userController.js";

const UserRouter = express.Router();

export const userRouter = UserRouter.get("/signup", signupUser).post("/register", registerUser)