import axios from 'axios';

// Replace with your Edamam credentials
const APP_ID = '4e17c888';
const APP_KEY = 'c9f07d926e0453653f173b5bced350c9';

// Function to search for recipes based on multiple ingredients
async function searchRecipes(ingredients) {
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(ingredients.join(','))}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
        const response = await axios.get(url);
        const recipes = response.data.hits
            .map((hit) => ({
                label: hit.recipe.label,
                url: hit.recipe.url,
                ingredients: hit.recipe.ingredientLines,
            }))
            .filter(recipe => 
                recipe.ingredients.some(ingredient => 
                    ingredients.includes(ingredient.toLowerCase())
                )
            );

        return recipes; // Return the array of recipes that match the ingredients
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array in case of error
    }
}

// Example usage
export default searchRecipes; // Export the function for use in other modules

// To call the function and get recipes, you can do the following in another file:
// import searchRecipes from './path-to-your-file';
// const ingredients = ['meat', 'tomato', 'sandwich', 'cheese', 'chicken', 'bacon', 'lettuce', 'toast', 'french fries', 'beef', 'pork', 'salami', 'basil', 'waffle', 'pizza', 'pasta', 'sausage', 'antipasto'];
// const matchingRecipes = await searchRecipes(ingredients);
