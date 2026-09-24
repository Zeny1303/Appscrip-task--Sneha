export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export type SortOption = "recommended" | "newest" | "popular" | "price-high-low" | "price-low-high";

export interface FilterState {
  category: string;
  idealFor: string[];
}
