import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">🍴</span>
          <span className="navbar__logo-text">Recetas Online</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Navegación principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            Favoritos
            {favorites.length > 0 && (
              <span className="navbar__badge">{favorites.length}</span>
            )}
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar__drawer" aria-label="Menú móvil">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "navbar__drawer-link" + (isActive ? " navbar__link--active" : "")
            }
            onClick={closeMenu}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              "navbar__drawer-link" + (isActive ? " navbar__link--active" : "")
            }
            onClick={closeMenu}
          >
            Favoritos
            {favorites.length > 0 && (
              <span className="navbar__badge">{favorites.length}</span>
            )}
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
