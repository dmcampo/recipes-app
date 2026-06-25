import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeById } from "../services/mealApi";
import Loader from "../components/Loader";
import "../styles/details.css";

/**
 * Gets the YouTube video ID from a URL.
 * Works with different types of YouTube links.
 */
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadRecipe = async () => {
      try {
        setError("");

        const data = await getRecipeById(id);

        if (!data) {
          throw new Error("Recipe not found");
        }

        if (active) {
          setRecipe(data);
        }
      } catch (err) {
        if (active) {
          console.error(err);
          setError("No fue posible cargar la receta.");
        }
      }
    };

    loadRecipe();

    return () => {
      active = false;
    };
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!recipe) {
    return <Loader />;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  const videoId = getYouTubeId(recipe.strYoutube);

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">
        ← Volver a recetas
      </Link>

      <div className="detail-header">
        <img
          className="detail-image"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <div className="detail-info">
          <h1>{recipe.strMeal}</h1>

          <p>
            <strong>Categoría:</strong> {recipe.strCategory}
          </p>

          <p>
            <strong>Área:</strong> {recipe.strArea}
          </p>

          <h2>Ingredientes</h2>

          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Instrucciones</h2>

      <p>{recipe.strInstructions}</p>

      {videoId && (
        <>
          <h2>Video</h2>

          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={recipe.strMeal}
              allowFullScreen
            />
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;