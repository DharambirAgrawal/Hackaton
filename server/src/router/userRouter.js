import express from "express";

import {
  registerUser,
  signupUser,
  userData,
} from "../controller/userController.js";

const UserRouter = express.Router();

UserRouter.get("/signup", signupUser).post("/register", registerUser);

UserRouter.get("/data", userData);

export default UserRouter;
