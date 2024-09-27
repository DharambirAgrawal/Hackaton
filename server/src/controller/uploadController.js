import asyncHandler from "express-async-handler";
// import getImageClassification from "../services/imageClassification.js";
import getPredictedConcepts from "../services/imageClassification.js";


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
        // print(base64Image)

        getPredictedConcepts(base64Image).then(response => {
            console.log(response)

            res.status(200).json({
                success: true,
                data: response,
            });
        })

        console.log(ouput)
        
        // Respond with success
         

        
      }catch {

      }
       
})



export default handleUploadedImage