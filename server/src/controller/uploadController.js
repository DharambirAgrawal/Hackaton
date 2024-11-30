// controllers/imageUploadController.js

/////////////////////////////////////////////////////////////////////////////////////////////
// This controller handles the uploaded image, processes it to extract ingredients via 
// image classification, and fetches related recipes using the Edamam API.
/////////////////////////////////////////////////////////////////////////////////////////////

// Import dependencies
import asyncHandler from "express-async-handler"; // Middleware for handling async errors
import getPredictedConcepts from "../services/imageClassification.js"; // Service for image classification
import searchRecipes from "../services/recipeExtraction.js"; // Service for fetching recipes

/////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION: handleUploadedImage
// Description: Handles image uploads, processes the image to predict ingredients, and 
//              fetches recipes based on the predicted ingredients.
// Parameters: 
//   - req: Express request object, containing the uploaded file in `req.file`.
//   - res: Express response object, used to send back the results.
// Returns:
//   - JSON response with predicted ingredients and related recipes.
/////////////////////////////////////////////////////////////////////////////////////////////
export const handleUploadedImage = asyncHandler(async function (req, res) {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Convert the uploaded image to a base64 string
        const base64Image = req.file.buffer.toString('base64');

        // Predict concepts (ingredients) from the uploaded image
        const concepts = await getPredictedConcepts(base64Image);

        // Fetch recipes based on the predicted ingredients
        const recipes = await searchRecipes(concepts);

        // Send success response with predicted ingredients and recipes
        res.status(200).json({
            success: true,
            data: {
                ingredients: concepts,
                recipes: recipes,
            },
        });
    } catch (error) {
        // Log errors and send a failure response
        console.error(`An error occurred: ${error}`);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing the image.',
        });
    }
});

export default handleUploadedImage;
