"use client";

import { ShoppingCart, Search, Menu, User, Heart, Plus } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  className?: string;
}

/**
 * Main header component with navigation, search, and cart
 */
export function Header({ className }: HeaderProps) {
  const { cart, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-primary-foreground text-xl font-bold">CC</span>
            </div>
            <span className="text-foreground text-xl font-bold">CampusCart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/products"
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="mx-8 hidden max-w-md flex-1 md:flex">
            <div className="relative w-full">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search for textbooks, electronics..."
                className="pl-9"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Sell Button */}
            <Button asChild variant="default" className="hidden sm:flex">
              <Link href="/sell">
                <Plus className="mr-2 h-4 w-4" />
                Sell Item
              </Link>
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium">
                  {cart.totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 md:hidden">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input type="search" placeholder="Search products..." className="pl-9" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col space-y-3 pb-4 md:hidden">
            <Link
              href="/products"
              className="text-foreground/80 hover:text-foreground text-sm font-medium"
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="text-foreground/80 hover:text-foreground text-sm font-medium"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground text-sm font-medium"
            >
              About
            </Link>
            <Button asChild variant="default" className="w-full">
              <Link href="/sell">
                <Plus className="mr-2 h-4 w-4" />
                Sell Item
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
