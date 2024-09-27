import axios from 'axios';

// Replace with your Edamam credentials
const APP_ID = '4e17c888';
const APP_KEY = 'c9f07d926e0453653f173b5bced350c9';

// Function to search for recipes
async function searchRecipes(query) {
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
        const response = await axios.get(url);
        const recipes = response.data.hits.map((hit) => ({
            label: hit.recipe.label,
            url: hit.recipe.url,
            ingredients: hit.recipe.ingredientLines,
        }));

        return recipes; // Return the array of recipes
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array in case of error
    }
}

// Example usage
export default searchRecipes; // Export the function for use in other modules


 