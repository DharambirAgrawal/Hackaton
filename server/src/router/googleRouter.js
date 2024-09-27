import express from 'express'

import { googleIt } from "../controller/someData.js";

const GoogleRouter = express.Router();

export const googleRouter = GoogleRouter.post('/google', googleIt)