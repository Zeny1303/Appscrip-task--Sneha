import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={360}
            className="product-img"
            loading="lazy"
            unoptimized
          />
        ) : (
          <div className="product-image-placeholder">
            <div className="placeholder-box" />
          </div>
        )}
      </div>

      <div className="product-details">
        <div className="product-header-row">
          <h3 className="product-title-text" title={product.title}>
            {product.title}
          </h3>

          <button
            className={`wishlist-btn ${isWishlisted ? "wishlisted" : ""}`}
            onClick={() => onToggleWishlist(product.id)}
            aria-label={isWishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isWishlisted ? "#eb4c60" : "none"}
              stroke={isWishlisted ? "#eb4c60" : "currentColor"}
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        <div className="product-meta-row">
          <p className="product-subtext">
            <a href="#signin">Sign in</a> or Create an account to see pricing
          </p>
          {product.price > 0 && (
            <p className="product-price">${product.price.toFixed(2)}</p>
          )}
        </div>

        {product.rating && (
          <div className="product-rating" aria-label={`Rated ${product.rating.rate} out of 5 stars from ${product.rating.count} reviews`}>
            <span className="rating-stars">★ {product.rating.rate}</span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
        )}
      </div>
    </article>
  );
}
