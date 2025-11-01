"use client";

import * as React from "react";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  error?: string;
  onWishlistToggle?: (productId: string) => void;
  wishlistIds?: Set<string>;
  emptyMessage?: string;
}

/**
 * Product grid component for displaying multiple products
 * @param products - Array of products to display
 * @param isLoading - Loading state
 * @param error - Error message
 * @param onWishlistToggle - Wishlist toggle handler
 * @param wishlistIds - Set of product IDs in wishlist
 * @param emptyMessage - Message to show when no products
 */
export function ProductGrid({
  products,
  isLoading = false,
  error,
  onWishlistToggle,
  wishlistIds = new Set(),
  emptyMessage = "No products found",
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12">
        <ErrorMessage title="Failed to load products" message={error} variant="error" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground text-lg">{emptyMessage}</p>
        <p className="text-muted-foreground mt-2 text-sm">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWishlistToggle={onWishlistToggle}
          isInWishlist={wishlistIds.has(product.id)}
        />
      ))}
    </div>
  );
}
