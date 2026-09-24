import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  showFilter: boolean;
  wishlistSet: Set<number>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductGrid({
  products,
  showFilter,
  wishlistSet,
  onToggleWishlist,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="empty-grid-state">
        <p className="empty-title">No products found</p>
        <p className="empty-subtext">Try clearing your category filter or check back later.</p>
      </div>
    );
  }

  return (
    <div className={`product-grid ${showFilter ? "grid-with-sidebar" : "grid-full-width"}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlistSet.has(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
}
