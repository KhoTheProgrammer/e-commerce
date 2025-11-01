"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Cart, CartItem, Product } from "@/types";

interface CartContextType {
  cart: Cart;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const TAX_RATE = 0.08; // 8% tax rate
const STORAGE_KEY = "campuscart_cart";

/**
 * Cart Provider Component
 * Manages shopping cart state globally
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    total: 0,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount (client-side only)
  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          setCart(parsedCart);
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes (client-side only)
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isHydrated]);

  /**
   * Calculate cart totals
   */
  const calculateTotals = (items: CartItem[]): Omit<Cart, "items"> => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return {
      totalItems,
      subtotal,
      tax,
      total,
    };
  };

  /**
   * Add product to cart
   */
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.productId === product.id
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        // Update existing item quantity
        newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        const newItem: CartItem = {
          productId: product.id,
          product,
          quantity,
          addedAt: new Date().toISOString(),
        };
        newItems = [...prevCart.items, newItem];
      }

      const totals = calculateTotals(newItems);

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  /**
   * Remove product from cart
   */
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.productId !== productId);
      const totals = calculateTotals(newItems);

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  /**
   * Update item quantity in cart
   */
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      const totals = calculateTotals(newItems);

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
      subtotal: 0,
      tax: 0,
      total: 0,
    });
  };

  /**
   * Get total number of items in cart
   */
  const getCartItemCount = () => cart.totalItems;

  const value: CartContextType = {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to use cart context
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default CartContext;
