const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img 
          src="https://placehold.co/300x200/ff6b6b/ffffff?text=Recipe" 
          alt={recipe.title}
        />
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-details">
          <span className="recipe-time">⏱️ {recipe.readyInMinutes} min</span>
          <span className="recipe-servings">🍽️ {recipe.servings} servings</span>
        </div>
        <button className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};

export default RecipeCard;