"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import { mockProducts } from "@/lib/mockData";
import { FilterOptions, Product } from "@/types";
import { useCart } from "@/context/CartContext";

function ProductsContent() {
  const searchParams = useSearchParams();
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  
  const categoryParam = searchParams.get("category");
  
  const [filters, setFilters] = useState<FilterOptions>(() => ({
    category: categoryParam as any,
    sortBy: "newest",
  }));
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set());

  // Update filters when URL changes
  useEffect(() => {
    if (categoryParam && categoryParam !== filters.category) {
      setFilters(prev => ({ ...prev, category: categoryParam as any }));
    }
  }, [categoryParam, filters.category]);

  // Apply filters and sorting
  useEffect(() => {
    let products = [...mockProducts];

    // Filter by category
    if (filters.category) {
      products = products.filter((p) => p.category === filters.category);
    }

    // Filter by condition
    if (filters.condition && filters.condition.length > 0) {
      products = products.filter((p) => filters.condition!.includes(p.condition));
    }

    // Filter by price range
    if (filters.minPrice !== undefined) {
      products = products.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      products = products.filter((p) => p.price <= filters.maxPrice!);
    }

    // Filter by search query
    if (filters.search) {
      const query = filters.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort products
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

    setFilteredProducts(products);
  }, [filters]);

  const handleWishlistToggle = (productId: string) => {
    setWishlistIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-foreground mb-2 text-3xl font-bold md:text-4xl">
              Browse Products
            </h1>
            <p className="text-muted-foreground text-lg">
              Find what you need from fellow students
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
            {/* Filters Sidebar */}
            <aside className="space-y-4">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                resultsCount={filteredProducts.length}
              />
            </aside>

            {/* Products Grid */}
            <div>
              <ProductGrid
                products={filteredProducts}
                onWishlistToggle={handleWishlistToggle}
                wishlistIds={wishlistIds}
                emptyMessage="No products match your filters"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Shopping Cart */}
      <ShoppingCart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
