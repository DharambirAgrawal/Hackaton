import asyncHandler from "express-async-handler";
import getImageClassification from "../services/imageClassification.js";


export const handleUploadedImage = asyncHandler(async function (req, res){

    // TODO: describe mode
    //const { mode } = req.query

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
    
      // Access the uploaded file
    console.log(req.file)
    try {
        
        const base64Image = req.file.buffer.toString('base64');
        print(base64Image)

        ouput = getImageClassification(base64Image)
        // Respond with success
        res.status(200).json({
            success: true,
            data: ouput,
        });

        
      }catch {

      }
       
})



export default handleUploadedImage