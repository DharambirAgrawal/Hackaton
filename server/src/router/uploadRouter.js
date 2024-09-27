import express from 'express'

import { handleUploadedImage } from "../controller/uploadController.js";

const imageRouter = express.Router();

imageRouter.post('/', handleUploadedImage)

export default imageRouter