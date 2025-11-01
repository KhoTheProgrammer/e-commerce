"use client";

import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/lib/mockData";
import { Product } from "@/types";

export default function WishlistPage() {
  // In a real app, this would come from user's saved wishlist
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set(["1", "2", "6", "7"])
  );

  const wishlistProducts = mockProducts.filter((p) => wishlistIds.has(p.id));

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

  const clearWishlist = () => {
    if (confirm("Are you sure you want to clear your entire wishlist?")) {
      setWishlistIds(new Set());
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Heart className="text-primary h-8 w-8 fill-current" />
                <h1 className="text-3xl font-bold md:text-4xl">My Wishlist</h1>
              </div>
              <p className="text-muted-foreground text-lg">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? "item" : "items"} saved for later
              </p>
            </div>

            {wishlistProducts.length > 0 && (
              <Button variant="outline" onClick={clearWishlist}>
                <Trash2 className="mr-2 h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>

          {/* Wishlist Content */}
          {wishlistProducts.length > 0 ? (
            <ProductGrid
              products={wishlistProducts}
              onWishlistToggle={handleWishlistToggle}
              wishlistIds={wishlistIds}
            />
          ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white p-8 text-center">
              <Heart className="text-muted-foreground mb-4 h-16 w-16" />
              <h2 className="mb-2 text-2xl font-bold">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Start adding items you love to your wishlist. Click the heart icon on any product to save it here.
              </p>
              <Button asChild>
                <a href="/products">Browse Products</a>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
