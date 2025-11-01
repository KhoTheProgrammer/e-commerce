"use client";

import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onWishlistToggle?: (productId: string) => void;
  isInWishlist?: boolean;
  className?: string;
}

/**
 * Product card component for displaying product information
 * @param product - Product data
 * @param onWishlistToggle - Wishlist toggle handler
 * @param isInWishlist - Whether product is in wishlist
 */
export function ProductCard({
  product,
  onWishlistToggle,
  isInWishlist = false,
  className,
}: ProductCardProps) {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onWishlistToggle?.(product.id);
  };

  const conditionColors = {
    new: "bg-green-100 text-green-800",
    "like-new": "bg-blue-100 text-blue-800",
    good: "bg-yellow-100 text-yellow-800",
    fair: "bg-orange-100 text-orange-800",
    poor: "bg-red-100 text-red-800",
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card
        className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}
      >
        {/* Image Container */}
        <div className="bg-muted relative aspect-square overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/80 hover:bg-background absolute top-2 right-2"
            onClick={handleWishlistClick}
          >
            <Heart
              className={cn("h-5 w-5", isInWishlist && "fill-red-500 text-red-500")}
            />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          {/* Featured Badge */}
          {product.isFeatured && (
            <Badge className="bg-secondary absolute top-2 left-2">Featured</Badge>
          )}
        </div>

        <CardContent className="p-4">
          {/* Title */}
          <h3 className="text-foreground mb-2 line-clamp-2 text-lg font-semibold">
            {product.title}
          </h3>

          {/* Condition Badge */}
          <Badge
            className={cn("mb-2", conditionColors[product.condition])}
            variant="outline"
          >
            {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
          </Badge>

          {/* Location */}
          <div className="text-muted-foreground mb-2 flex items-center text-sm">
            <MapPin className="mr-1 h-3 w-3" />
            {product.location}
          </div>

          {/* Price */}
          <p className="text-primary text-2xl font-bold">{formatPrice(product.price)}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          {/* Seller Info */}
          <div className="text-muted-foreground flex items-center text-sm">
            <div className="bg-muted mr-2 h-6 w-6 rounded-full" />
            <span className="truncate">{product.sellerName}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
