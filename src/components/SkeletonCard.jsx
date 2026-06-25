/**
 * SkeletonCard – mimics a RecipeCard while content loads.
 * Uses a CSS shimmer animation defined in home.css.
 */
function SkeletonCard() {
  return (
    <div className="recipe-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-title skeleton-title--short" />
        <div className="skeleton skeleton-link" />
      </div>
    </div>
  );
}

export default SkeletonCard;
