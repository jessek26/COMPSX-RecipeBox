const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export async function getPopularRecipes(query) {
    const response = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`
    );
    const data = await response.json();
    return data.recipes;
};

export async function searchRecipes(query) {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=6`
    )
    const data = await response.json();
    return data.results 
}

