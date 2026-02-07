const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export async function getPopularRecipes() {
    const response = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`
    );
    const data = await response.json();
    return data.recipes;
};