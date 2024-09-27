import express from 'express'

import { handleUploadedImage } from "../controller/someData.js";

const imageRouter = express.Router();

imageRouter.post('/', handleUploadedImage)

export default imageRouter