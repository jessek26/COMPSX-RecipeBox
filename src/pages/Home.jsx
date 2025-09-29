import RecipeGrid from '../components/RecipeGrid';

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

const Home = () => {
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Recipes</h2>
        <p>Discover delicious recipes for every meal</p>
      </div>
      <RecipeGrid recipes={staticRecipes} />
    </main>
  );
};

export default Home;