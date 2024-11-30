import express from 'express'

import { googleIt } from "../controller/googleSearchCommunications";

const GoogleRouter = express.Router();

export const googleRouter = GoogleRouter.post('/google', googleIt)