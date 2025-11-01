"use client";

import { Separator } from "@radix-ui/react-select";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Cart, CartItem } from "@/types";

interface ShoppingCartProps {
  cart: Cart;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

/**
 * Shopping cart drawer component
 * @param cart - Cart data
 * @param isOpen - Drawer open state
 * @param onClose - Close handler
 * @param onUpdateQuantity - Quantity update handler
 * @param onRemoveItem - Remove item handler
 */
export function ShoppingCart({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}: ShoppingCartProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose} />}

      {/* Drawer */}
      <div
        className={cn(
          "bg-background fixed top-0 right-0 z-50 h-full w-full shadow-lg transition-transform duration-300 sm:w-[400px]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Shopping Cart ({cart.totalItems})</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="text-muted-foreground mb-4 h-12 w-12" />
                <p className="text-muted-foreground text-lg font-medium">
                  Your cart is empty
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Add items to get started
                </p>
                <Button asChild className="mt-6">
                  <Link href="/products" onClick={onClose}>
                    Browse Products
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItemCard
                    key={item.productId}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveItem}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t px-6 py-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatPrice(cart.tax)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
              </div>
              <Button asChild className="mt-4 w-full" size="lg">
                <Link href="/checkout" onClick={onClose}>
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/**
 * Individual cart item card component
 */
function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}) {
  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <Link
        href={`/products/${item.productId}`}
        className="bg-muted relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md"
      >
        <Image
          src={item.product.images[0] || "/placeholder.jpg"}
          alt={item.product.title}
          fill
          className="object-cover"
          sizes="80px"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <Link
          href={`/products/${item.productId}`}
          className="line-clamp-2 text-sm font-medium hover:underline"
        >
          {item.product.title}
        </Link>
        <p className="text-primary mt-1 text-sm font-semibold">
          {formatPrice(item.product.price)}
        </p>

        {/* Quantity Controls */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() =>
                onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))
              }
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-destructive h-8 w-8"
            onClick={() => onRemove(item.productId)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
