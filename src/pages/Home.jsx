import { useEffect, useState } from "react";
import {
  searchRecipes,
  getCategories,
  getRecipesByCategory,
  getAllRecipes,
} from "../services/mealApi";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import SkeletonCard from "../components/SkeletonCard";
import EmptyState from "../components/EmptyState";
import useDebounce from "../hooks/useDebounce";
import "../styles/home.css";

const PAGE_SIZE = 12;
const SKELETON_COUNT = 12;

function Home() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [currentPage, setCurrentPage] = useState(1);

  // ── useDebounce replaces the old setTimeout pattern ───────────────────────
  const debouncedSearch = useDebounce(searchTerm, 400);

  // ── Fetch recipes whenever debounced search or category changes ───────────
  useEffect(() => {
    let active = true;

    const loadRecipes = async () => {
      try {
        setLoading(true);
        setError("");
        setCurrentPage(1);

        let data = [];

        if (debouncedSearch.trim()) {
          data = await searchRecipes(debouncedSearch);
        } else if (selectedCategory === "Todas") {
          data = await getAllRecipes();
        } else {
          data = await getRecipesByCategory(selectedCategory);
        }

        if (active) {
          setAllRecipes(data || []);
        }
      } catch (err) {
        if (active) {
          console.error(err);
          setError("Error al cargar las recetas. Intenta de nuevo.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadRecipes();

    return () => {
      active = false;
    };
  }, [debouncedSearch, selectedCategory]);

  // Category list
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data || []);
      } catch (err) {
        console.error(err);
      }
    };
    loadCategories();
  }, []);

  // Pagination
  const totalPages = Math.ceil(allRecipes.length / PAGE_SIZE);
  const pagedRecipes = allRecipes.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = new Set();
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.add(i);
      }
    } else {
      pages.add(1);
      pages.add(totalPages);

      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.add(i);
        }
      } else if (currentPage >= totalPages - 3) {
        for (let i = totalPages - 4; i <= totalPages - 1; i++) {
          pages.add(i);
        }
      } else {
        pages.add(currentPage - 1);
        pages.add(currentPage);
        pages.add(currentPage + 1);
      }
    }
    return [...pages].sort((a, b) => a - b);
  };

  // Heading
  const heading = debouncedSearch
    ? `Resultados para "${debouncedSearch}"`
    : selectedCategory === "Todas"
    ? "Todas las recetas"
    : `Recetas de ${selectedCategory}`;

  return (
    <div>
      <h1>{heading}</h1>

      <div className="filters-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSearchTerm(""); // clear search when changing category
          }}
          disabled={loading}
        >
          <option value="Todas">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <EmptyState
          icon="⚠️"
          title="Algo salió mal"
          message={error}
        />
      )}

      {/* Skeleton while loading */}
      {loading && (
        <div className="recipes-grid">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Results */}
      {!loading && !error && allRecipes.length === 0 && (
        <EmptyState
          icon="🔍"
          title="Sin resultados"
          message={
            debouncedSearch
              ? `No encontramos recetas para "${debouncedSearch}". Prueba con otra búsqueda.`
              : "No hay recetas disponibles para esta categoría."
          }
        />
      )}

      {!loading && !error && pagedRecipes.length > 0 && (
        <>
          <div className="recipes-grid">
            {pagedRecipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="pagination" aria-label="Paginación de recetas">
              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
              >
                ←
              </button>

              {getPageNumbers().map((page, idx, arr) => {
                const showEllipsis = idx > 0 && page - arr[idx - 1] > 1;
                return (
                  <span key={page} className="pagination-group">
                    {showEllipsis && (
                      <span className="pagination-ellipsis">…</span>
                    )}
                    <button
                      className={`pagination-btn${page === currentPage ? " active" : ""}`}
                      onClick={() => goToPage(page)}
                      aria-label={`Ir a la página ${page}`}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </button>
                  </span>
                );
              })}

              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
              >
                →
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}

export default Home;