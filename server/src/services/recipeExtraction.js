import axios from 'axios';

// Replace with your Edamam credentials
const APP_ID = '4e17c888';
const APP_KEY = 'c9f07d926e0453653f173b5bced350c9';

// Function to search for recipes based on multiple ingredients
async function searchRecipes(ingredients) {
    const recipesPerIngredient = 1;
    const allRecipes = [];

    for (let i = 0; i < Math.min(5, ingredients.length); i++) {
        const ingredient = ingredients[i];
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(ingredient)}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        try {
            const response = await axios.get(url);
            const recipes = response.data.hits.slice(0, recipesPerIngredient).map((hit) => ({
                label: hit.recipe.label,
                url: hit.recipe.url,
                ingredients: hit.recipe.ingredientLines,
                image: hit.recipe.image
            }))
            

        return recipes; // Return the array of recipes that match the ingredients
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array in case of error
    }

    return allRecipes; // Return the array of all recipes
}
}

// Example usage
export default searchRecipes; // Export the function for use in other modules


