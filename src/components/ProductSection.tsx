"use client";

import { useState, useMemo } from "react";
import { Product, SortOption } from "@/types/product";
import FilterBar from "./FilterBar";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

interface ProductSectionProps {
  initialProducts: Product[];
}

export default function ProductSection({ initialProducts }: ProductSectionProps) {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOption, setSortOption] = useState<SortOption>("recommended");
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  // Extract unique categories from initial server-fetched products
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialProducts.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [initialProducts]);

  // Handle Wishlist Toggle
  const handleToggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter & Sort Products dynamically
  const displayedProducts = useMemo(() => {
    let result = [...initialProducts];

    // Category Filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        result.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
        break;
      case "recommended":
      default:
        // Default API order
        break;
    }

    return result;
  }, [initialProducts, selectedCategory, sortOption]);

  return (
    <section className="product-section">
      <div className="product-section-container">
        <FilterBar
          totalItems={displayedProducts.length}
          showFilter={showFilter}
          onToggleFilter={() => setShowFilter((prev) => !prev)}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onToggleMobileFilter={() => setMobileFilterOpen((prev) => !prev)}
        />

        <div className="product-main-layout">
          {/* Desktop & Mobile Filter Sidebar */}
          {showFilter && (
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setMobileFilterOpen(false);
              }}
              isOpenMobile={mobileFilterOpen}
              onCloseMobile={() => setMobileFilterOpen(false)}
            />
          )}

          <ProductGrid
            products={displayedProducts}
            showFilter={showFilter}
            wishlistSet={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        </div>
      </div>
    </section>
  );
}
