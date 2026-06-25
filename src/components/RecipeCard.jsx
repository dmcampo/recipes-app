import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ recipe }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favored = isFavorite(recipe.idMeal);

  const handleFavorite = (e) => {
    e.preventDefault(); // Don't open the recipe page when clicking the heart button
    toggleFavorite(recipe);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-card__img-wrapper">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} loading="lazy" />

        <button
          className={`recipe-card__fav-btn ${favored ? "is-active" : ""}`}
          onClick={handleFavorite}
          aria-label={
            favored
              ? `Quitar ${recipe.strMeal} de favoritos`
              : `Agregar ${recipe.strMeal} a favoritos`
          }
          title={favored ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {favored ? "❤️" : "🤍"}
        </button>
      </div>

      <h3>{recipe.strMeal}</h3>

      <Link to={`/recipe/${recipe.idMeal}`}>Ver detalle</Link>
    </div>
  );
}

export default RecipeCard;