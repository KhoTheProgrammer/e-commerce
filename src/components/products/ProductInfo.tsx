"use client";

import { Clock, Eye, Heart, MapPin, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
  onAddToCart?: () => void;
  onWishlistToggle?: () => void;
  isInWishlist?: boolean;
}

/**
 * Product information display component
 */
export function ProductInfo({
  product,
  onAddToCart,
  onWishlistToggle,
  isInWishlist = false,
}: ProductInfoProps) {
  const conditionColors = {
    new: "bg-green-100 text-green-800 border-green-300",
    "like-new": "bg-blue-100 text-blue-800 border-blue-300",
    good: "bg-yellow-100 text-yellow-800 border-yellow-300",
    fair: "bg-orange-100 text-orange-800 border-orange-300",
    poor: "bg-red-100 text-red-800 border-red-300",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <div className="mb-2 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={onWishlistToggle}
            className="shrink-0"
          >
            <Heart
              className={isInWishlist ? "fill-red-500 text-red-500" : ""}
              size={20}
            />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>

        {/* Meta Info */}
        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {product.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Posted {formatDate(product.createdAt)}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {product.views} views
          </div>
        </div>
      </div>

      <Separator />

      {/* Price and Condition */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.isFeatured && (
            <Badge variant="secondary" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <div>
          <Badge
            className={conditionColors[product.condition]}
            variant="outline"
          >
            Condition: {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button size="lg" className="flex-1" onClick={onAddToCart}>
          Add to Cart
        </Button>
        <Button size="lg" variant="secondary" className="flex-1">
          Make an Offer
        </Button>
      </div>

      <Separator />

      {/* Description */}
      <div>
        <h2 className="mb-3 text-xl font-semibold">Description</h2>
        <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Tags */}
      {product.tags.length > 0 && (
        <>
          <Separator />
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Tag className="h-4 w-4" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Category */}
      <div className="rounded-lg bg-muted p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Category</span>
          <Badge variant="outline">
            {product.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </Badge>
        </div>
      </div>
    </div>
  );
}
