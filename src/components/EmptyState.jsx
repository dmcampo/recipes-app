/**
 * EmptyState – shown when a list has no items.
 *
 * @param {string} icon    - Emoji or small illustration
 * @param {string} title   - Short headline
 * @param {string} message - Longer descriptive sentence
 */
function EmptyState({
  icon = "🍽️",
  title = "Sin resultados",
  message = "Intenta con otros términos de búsqueda.",
}) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon" role="img" aria-label={title}>
        {icon}
      </span>
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__message">{message}</p>
    </div>
  );
}

export default EmptyState;
