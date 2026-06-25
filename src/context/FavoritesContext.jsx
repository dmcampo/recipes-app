import { createContext, useCallback, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

const STORAGE_KEY = "recipe_favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = useCallback(
    (id) => favorites.some((r) => r.idMeal === id),
    [favorites]
  );

  const addFavorite = useCallback((recipe) => {
    setFavorites((prev) => {
      if (prev.some((r) => r.idMeal === recipe.idMeal)) return prev;
      return [...prev, recipe];
    });
  }, []);

  const removeFavorite = useCallback((id) => {
    setFavorites((prev) => prev.filter((r) => r.idMeal !== id));
  }, []);

  const toggleFavorite = useCallback(
    (recipe) => {
      if (isFavorite(recipe.idMeal)) {
        removeFavorite(recipe.idMeal);
      } else {
        addFavorite(recipe);
      }
    },
    [isFavorite, addFavorite, removeFavorite]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
