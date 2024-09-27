
//index.js file

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'c7c17699bbd240058195937f219179b6';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'clarifai';
const APP_ID = 'main';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'food-item-recognition';
const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';
const IMAGE_URL = 'https://s1.1zoom.me/b4251/376/Fast_food_Hamburger_Pizza_Hot_dog_Meat_products_513904_3840x2160.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

import { ClarifaiStub, grpc }  from "clarifai-nodejs-grpc"

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// async function getImageClassification (base64Image) {
//     console.log(base64Image)
//     return new Promise((resolve, reject) => {
//         stub.PostModelOutputs(
//             {
//                 user_app_id: {
//                     "user_id": USER_ID,
//                     "app_id": APP_ID
//                 },
//                 model_id: MODEL_ID,
//                 version_id: MODEL_VERSION_ID,
//                 inputs: [
//                     { data: { image: { base64: base64Image } } }
//                 ]
//             },
//             metadata,
//             (err, response) => {
//                 if (err) {
//                     return reject(err); // Reject the Promise with the error
//                 }

//                 if (response.status.code !== 10000) {
//                     return reject(new Error("Post model outputs failed, status: " + response.status.description));
//                 }

//                 // Since we have one input, one output will exist here
//                 const output = response.outputs[0];
                
//                 // Log the predicted concepts
//                 const concepts = output.data.concepts.map(concept => ({
//                     name: concept.name,
//                     value: concept.value,
//                 }));

//                 console.log("Predicted concepts:", concepts);
                
//                 resolve(concepts); // Resolve the Promise with the concepts
//             }
//         );
//     });
// }

// export default getImageClassification


async function getPredictedConcepts(base64Image) {
    //console.log(base64Image)
    
    return new Promise((resolve, reject) => {
        stub.PostModelOutputs(
            {
                user_app_id: {
                    "user_id": USER_ID,
                    "app_id": APP_ID
                },
                model_id: MODEL_ID,
                version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
                inputs: [
                    { data: { image: { base64: base64Image } } }
                ]
            },
            metadata,
            (err, response) => {
                if (err) {
                    return reject(err);
                }

                if (response.status.code !== 10000) {
                    return reject(new Error("Post model outputs failed, status: " + response.status.description));
                }

                // Extract predicted concept names into an array
                const output = response.outputs[0];
                const concepts = output.data.concepts.map(concept => concept.name);
                
                resolve(concepts); // Return the array of concept names
            }
        );
    });
}

export default getPredictedConcepts