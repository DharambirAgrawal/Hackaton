import axios from 'axios';

// Replace with your Edamam credentials
const APP_ID = '4e17c888';
const APP_KEY = 'c9f07d926e0453653f173b5bced350c9';

// Function to search for recipes based on multiple ingredients
async function searchRecipes(ingredients) {
    const recipesPerIngredient = 5;
    const allRecipes = [];

    for (let i = 0; i < Math.min(5, ingredients.length); i++) {
        const ingredient = ingredients[i];
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(ingredient)}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        try {
            const response = await axios.get(url);
           // console.log(response)
            const recipes = response.data.hits.slice(0, recipesPerIngredient).map((hit) => ({
                label: hit.recipe.label,
                url: hit.recipe.url,
                ingredients: hit.recipe.ingredientLines,
                image: hit.recipe.image
            }));
            allRecipes.push(...recipes); // Add the recipes for the current ingredient to the allRecipes array
        } catch (error) {
            console.error(`Error fetching recipes for ${ingredient}:`, error);
        }
    }

    return allRecipes; // Return the array of all recipes
}




 console.log(await searchRecipes( [
    'meat',         'tomato',
    'bread',        'ham',
    'sandwich',     'cheese',
    'chicken',      'bacon',
    'lettuce',      'toast',
    'french fries', 'beef',
    'pork',         'salami',
    'basil',        'waffle',
    'pizza',        'pasta',
    'sausage',      'antipasto'
  ])); // Export the function for use in other modules

// To call the function and get recipes, you can do the following in another file:
// import searchRecipes from './path-to-your-file';
// const ingredients = ['meat', 'tomato', 'sandwich', 'cheese', 'chicken', 'bacon', 'lettuce', 'toast', 'french fries', 'beef', 'pork', 'salami', 'basil', 'waffle', 'pizza', 'pasta', 'sausage', 'antipasto'];
// const matchingRecipes = await searchRecipes(ingredients);
