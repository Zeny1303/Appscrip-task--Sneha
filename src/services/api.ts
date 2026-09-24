import { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      return [];
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products from Fake Store API:", error);
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories from Fake Store API:", error);
    return [];
  }
}
