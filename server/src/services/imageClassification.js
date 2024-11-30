// imageClassification.js

/////////////////////////////////////////////////////////////////////////////////////////////
// This file uses the Clarifai API to analyze an image using a specific
// model.
/////////////////////////////////////////////////////////////////////////////////////////////

// Import necessary modules from the Clarifai Node.js gRPC library
import { ClarifaiStub, grpc } from "clarifai-nodejs-grpc";

// SETUP SECTION
// Personal Access Token (PAT) for authentication - can be found in your Clarifai account's Security settings
const PAT = 'c7c17699bbd240058195937f219179b6';

// User and app details - required for making inferences
const USER_ID = 'clarifai';
const APP_ID = 'main';

// Model and version details - specify the model you want to use
const MODEL_ID = 'food-item-recognition';
const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';


// Initialize Clarifai stub for gRPC communication
const stub = ClarifaiStub.grpc();

// Set up metadata for API calls (includes authorization key)
const metadata = new grpc.Metadata();
metadata.set("authorization", `Key ${PAT}`);

/////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION: getPredictedConcepts
// Description: Makes an API call to Clarifai's model to analyze an image and return
//              predicted concepts (e.g., food items in the image).
// Parameters: 
//   - base64Image (string): The base64-encoded representation of the image.
// Returns:
//   - A Promise resolving to an array of predicted concept names.
/////////////////////////////////////////////////////////////////////////////////////////////
async function getPredictedConcepts(base64Image) {
    return new Promise((resolve, reject) => {
        // API request to get model outputs
        stub.PostModelOutputs(
            {
                user_app_id: {
                    user_id: USER_ID,  // Specify the user ID
                    app_id: APP_ID    // Specify the app ID
                },
                model_id: MODEL_ID,  // Specify the model ID
                version_id: MODEL_VERSION_ID, // Optional: Specify a model version (defaults to latest)
                inputs: [
                    { 
                        data: { 
                            image: { base64: base64Image } // Provide the base64-encoded image
                        } 
                    }
                ]
            },
            metadata, // Pass authentication metadata
            (err, response) => {
                if (err) {
                    // Handle any errors in the API call
                    return reject(err);
                }

                if (response.status.code !== 10000) {
                    // Handle failed API response
                    return reject(new Error(`Post model outputs failed, status: ${response.status.description}`));
                }

                // Process and extract predicted concepts from the response
                const output = response.outputs[0];
                const concepts = output.data.concepts.map(concept => concept.name);

                // Resolve the Promise with the array of concept names
                resolve(concepts);
            }
        );
    });
}

// Export the function to be used in other parts of the application
export default getPredictedConcepts;
