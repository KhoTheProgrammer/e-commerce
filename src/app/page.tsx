"use client";

import {
  BookOpen,
  Laptop,
  Home as HomeIcon,
  Sofa,
  Shirt,
  Dumbbell,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LoginForm, RegisterForm } from "@/components/auth/AuthForms";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProducts } from "@/lib/mockData";
import { Category } from "@/types";
import { useCart } from "@/context/CartContext";

const categories = [
  {
    name: "Textbooks",
    icon: BookOpen,
    value: "textbooks" as Category,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Electronics",
    icon: Laptop,
    value: "electronics" as Category,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Dorm Supplies",
    icon: HomeIcon,
    value: "dorm-supplies" as Category,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Furniture",
    icon: Sofa,
    value: "furniture" as Category,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Clothing",
    icon: Shirt,
    value: "clothing" as Category,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    value: "sports" as Category,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Home() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 via-secondary/5 to-background bg-gradient-to-br px-4 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-foreground mb-6 text-4xl font-bold md:text-6xl">
              Your Campus Marketplace
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
              Buy and sell textbooks, electronics, dorm supplies, and more with fellow
              students
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 text-lg">
                <Link href="/sell">Sell an Item</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-foreground text-3xl font-bold">Shop by Category</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link key={category.value} href={`/products?category=${category.value}`}>
                  <Card className="group h-full cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div
                        className={`rounded-full p-4 ${category.color} mb-4 transition-transform group-hover:scale-110`}
                      >
                        <category.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-foreground font-semibold">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary h-6 w-6" />
                <h2 className="text-foreground text-3xl font-bold">Featured Listings</h2>
              </div>
              <Button asChild variant="ghost">
                <Link href="/products">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ProductGrid
              products={featuredProducts}
              onWishlistToggle={(id) => console.log("Toggle wishlist:", id)}
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold">
              How CampusCart Works
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Browse & Search</h3>
                <p className="text-muted-foreground">
                  Find what you need from fellow students at your university
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Connect & Meet</h3>
                <p className="text-muted-foreground">
                  Message sellers and arrange safe meetups on campus
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Buy or Sell</h3>
                <p className="text-muted-foreground">
                  Complete your transaction and leave a review
                </p>
              </div>
            </div>
          </div>
        </section>
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

      {/* Auth Forms */}
      <LoginForm
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterForm
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}
