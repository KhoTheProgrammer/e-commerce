/**
 * API service layer for fetching and managing data
 * In production, these would make actual API calls to the backend
 */

import { mockProducts } from "./mockData";
import { FilterOptions, Product, Category, Condition } from "@/types";

/**
 * Fetch all products with optional filtering and sorting
 */
export async function fetchProducts(filters?: FilterOptions): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let products = [...mockProducts];

  if (!filters) {
    return products;
  }

  // Apply filters
  if (filters.category) {
    products = products.filter((p) => p.category === filters.category);
  }

  if (filters.condition && filters.condition.length > 0) {
    products = products.filter((p) => filters.condition!.includes(p.condition));
  }

  if (filters.minPrice !== undefined) {
    products = products.filter((p) => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    products = products.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.search) {
    const query = filters.search.toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Apply sorting
  switch (filters.sortBy) {
    case "newest":
      products.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "price-low":
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      products.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      products.sort((a, b) => b.views - a.views);
      break;
  }

  return products;
}

/**
 * Fetch a single product by ID
 */
export async function fetchProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const product = mockProducts.find((p) => p.id === id);
  return product || null;
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(category: Category): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockProducts.filter((p) => p.category === category);
}

/**
 * Search products by query
 */
export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Fetch featured/trending products
 */
export async function fetchFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockProducts.filter((p) => p.isFeatured);
}

/**
 * Create a new product listing
 */
export async function createProduct(productData: Partial<Product>): Promise<Product> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real app, this would send data to the backend
  const newProduct: Product = {
    id: `product-${Date.now()}`,
    title: productData.title || "",
    description: productData.description || "",
    price: productData.price || 0,
    category: productData.category || "other",
    condition: productData.condition || "good",
    images: productData.images || [],
    sellerId: "current-user", // Would come from auth
    sellerName: "Current User",
    location: productData.location || "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: 0,
    isFeatured: false,
    tags: productData.tags || [],
  };

  return newProduct;
}

/**
 * Update an existing product
 */
export async function updateProduct(
  id: string,
  updates: Partial<Product>
): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = mockProducts.find((p) => p.id === id);
  if (!product) {
    return null;
  }

  // In a real app, this would send updates to the backend
  return {
    ...product,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Delete a product
 */
export async function deleteProduct(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // In a real app, this would send a delete request to the backend
  const index = mockProducts.findIndex((p) => p.id === id);
  return index !== -1;
}

/**
 * Increment product view count
 */
export async function incrementProductViews(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In a real app, this would update the view count in the backend
  const product = mockProducts.find((p) => p.id === id);
  if (product) {
    product.views += 1;
  }
}

/**
 * Get related products (same category, different product)
 */
export async function fetchRelatedProducts(
  productId: string,
  limit: number = 4
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const product = mockProducts.find((p) => p.id === productId);
  if (!product) {
    return [];
  }

  return mockProducts
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit);
}

/**
 * Get product statistics
 */
export async function fetchProductStats(productId: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return {
    views: Math.floor(Math.random() * 500),
    favorites: Math.floor(Math.random() * 50),
    inquiries: Math.floor(Math.random() * 20),
  };
}

// Export all functions as a single API object for convenience
export const api = {
  products: {
    fetchAll: fetchProducts,
    fetchById: fetchProductById,
    fetchByCategory: fetchProductsByCategory,
    search: searchProducts,
    fetchFeatured: fetchFeaturedProducts,
    fetchRelated: fetchRelatedProducts,
    create: createProduct,
    update: updateProduct,
    delete: deleteProduct,
    incrementViews: incrementProductViews,
    fetchStats: fetchProductStats,
  },
};

export default api;
