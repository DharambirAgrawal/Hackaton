// recipeExtraction.js

/////////////////////////////////////////////////////////////////////////////////////////////
// This  uses the Edamam API to search for recipes based on multiple
// ingredients. 
/////////////////////////////////////////////////////////////////////////////////////////////

// Import the Axios library for making HTTP requests
import axios from 'axios';

// SETUP SECTION
// Replace with your Edamam API credentials (available in your Edamam account)
const APP_ID = '4e17c888';
const APP_KEY = 'c9f07d926e0453653f173b5bced350c9';

/////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION: searchRecipes
// Description: Fetches recipes from the Edamam API based on the provided list of ingredients.
// Parameters: 
//   - ingredients (array of strings): A list of ingredients to search for.
// Returns:
//   - A Promise resolving to an array of recipe objects, each containing:
//       - label (string): The name of the recipe
//       - url (string): A link to the recipe's source
//       - ingredients (array of strings): List of ingredient lines
//       - image (string): URL of the recipe image
/////////////////////////////////////////////////////////////////////////////////////////////
async function searchRecipes(ingredients) {
    const recipesPerIngredient = 5; // Maximum number of recipes to fetch per ingredient
    const allRecipes = []; // To store recipes from all ingredients

    // Limit the number of ingredients to 5 for API requests
    for (let i = 0; i < Math.min(5, ingredients.length); i++) {
        const ingredient = ingredients[i]; // Get the current ingredient
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(ingredient)}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        try {
            // Make a GET request to the Edamam API
            const response = await axios.get(url);

            // Process the response to extract recipe details
            const recipes = response.data.hits
                .slice(0, recipesPerIngredient) // Limit recipes to the defined maximum
                .map(hit => ({
                    label: hit.recipe.label,          // Recipe name
                    url: hit.recipe.url,             // Source URL
                    ingredients: hit.recipe.ingredientLines, // List of ingredient lines
                    image: hit.recipe.image          // Image URL
                }));

            // Add recipes for the current ingredient to the overall collection
            allRecipes.push(...recipes);
        } catch (error) {
            // Log errors and continue processing other ingredients
            console.error('Error fetching recipes:', error);
        }
    }

    return allRecipes; // Return the collected recipes
}

// Export the function for use in other modules
export default searchRecipes;
