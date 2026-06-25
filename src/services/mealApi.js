import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const getDesserts = async () => {
  const response = await api.get("/filter.php?c=Dessert");
  return response.data.meals;
};

export const getRecipeById = async (id) => {
  const response = await api.get(`/lookup.php?i=${id}`);
  return response.data.meals[0];
};

export const searchRecipes = async (name) => {
  const response = await api.get(`/search.php?s=${name}`);
  return response.data.meals;
};

export const getCategories = async () => {
  const response = await api.get("/categories.php");
  return response.data.categories;
};

export const getRecipesByCategory = async (category) => {
  const response = await api.get(`/filter.php?c=${category}`);
  return response.data.meals;
};

/**
 * Fetches recipes from all categories in parallel, then returns
 * a shuffled flat list so "All categories" shows variety.
 */
export const getAllRecipes = async () => {
  const categoriesRes = await api.get("/categories.php");
  const categories = categoriesRes.data.categories || [];

  const results = await Promise.all(
    categories.map((cat) =>
      api
        .get(`/filter.php?c=${cat.strCategory}`)
        .then((res) => res.data.meals || [])
        .catch(() => [])
    )
  );

  const all = results.flat();

  // Fisher-Yates shuffle for variety on first load
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return all;
};
