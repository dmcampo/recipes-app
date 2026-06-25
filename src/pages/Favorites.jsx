import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import EmptyState from "../components/EmptyState";
import "../styles/home.css";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <Link to="/" className="back-button">
        ← Volver a recetas
      </Link>

      <h1>Mis Favoritos</h1>

      {favorites.length === 0 ? (
        <EmptyState
          icon="💔"
          title="No tienes favoritos aún"
          message="Explora las recetas y guarda las que más te gusten tocando el ❤️"
        />
      ) : (
        <div className="recipes-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
