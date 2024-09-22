import express from "express";

import { registerUser } from "../controller/userController.js";

const UserRouter = express.Router();

export const userRouter = UserRouter.get("/signup", registerUser)