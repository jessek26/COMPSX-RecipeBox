import RecipeGrid from '../components/RecipeGrid';
import { useState, useEffect } from 'react';
import { getPopularRecipes } from '../services/recipeService';

// Static recipe data for template
const staticRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    readyInMinutes: 30,
    servings: 4,
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    readyInMinutes: 45,
    servings: 6,
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Greek Salad",
    readyInMinutes: 15,
    servings: 4,
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Beef Tacos",
    readyInMinutes: 25,
    servings: 4,
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    readyInMinutes: 20,
    servings: 3,
    image: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "Chocolate Chip Cookies",
    readyInMinutes: 35,
    servings: 24,
    image: "/placeholder.jpg"
  }
];

function Home({ searchResults }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async ()=> {
      const recipeData = await getPopularRecipes();
      setRecipes(recipeData);
    };

    fetchRecipes();
  }, []);

  const displayRecipes = searchResults || recipes;

  return (
    <main className='main-content'>
      <div className="content-header">
        <h2>{searchResults ? 'Search Results' : 'Popular Recipes'}</h2>
        <p>Discover delicous recipes</p>
      </div>
      <RecipeGrid recipes={displayRecipes} />
    </main>
  );
};

export default Home;