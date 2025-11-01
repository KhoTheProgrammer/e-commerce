"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductImages } from "@/components/products/ProductImages";
import { ProductInfo } from "@/components/products/ProductInfo";
import { SellerCard } from "@/components/products/SellerCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { getProductById, mockProducts } from "@/lib/mockData";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  const { cart, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart } = useCart();
  const [isInWishlist, setIsInWishlist] = useState(false);

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current)
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  const handleContactSeller = () => {
    // TODO: Implement messaging
    console.log("Contact seller:", product.sellerId);
    alert("Messaging feature coming soon!");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Check out ${product.title} on CampusCart`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          {/* Product Details Grid */}
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr,350px]">
            {/* Product Images */}
            <div>
              <ProductImages images={product.images} title={product.title} />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo
                product={product}
                onAddToCart={handleAddToCart}
                onWishlistToggle={() => setIsInWishlist(!isInWishlist)}
                isInWishlist={isInWishlist}
              />
            </div>

            {/* Seller Card */}
            <div>
              <SellerCard
                sellerId={product.sellerId}
                sellerName={product.sellerName}
                sellerAvatar={product.sellerAvatar}
                location={product.location}
                rating={4.8}
                totalSales={23}
                joinedDate="2024"
                onContactSeller={handleContactSeller}
              />
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Similar Products</h2>
                <Button variant="ghost" asChild>
                  <Link href={`/products?category=${product.category}`}>
                    View all
                  </Link>
                </Button>
              </div>
              <ProductGrid
                products={relatedProducts}
                onWishlistToggle={(id) => console.log("Toggle wishlist:", id)}
              />
            </div>
          )}
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
