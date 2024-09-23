import express from "express";
import cors from "cors";
import { server } from "../../index.js";
import { configCors } from "../config/config.js";

export const applyMiddleware = () => {
  // Enable CORS with secure configuration
  server.use(cors(configCors));
  server.use(express.json());
};