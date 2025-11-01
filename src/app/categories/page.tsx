"use client";

import {
  BookOpen,
  Laptop,
  Home as HomeIcon,
  Sofa,
  Shirt,
  Dumbbell,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { mockProducts } from "@/lib/mockData";

const categories: {
  value: Category;
  label: string;
  description: string;
  icon: any;
  color: string;
}[] = [
  {
    value: "textbooks",
    label: "Textbooks",
    description: "Course materials and academic books",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    value: "electronics",
    label: "Electronics",
    description: "Laptops, tablets, phones, and gadgets",
    icon: Laptop,
    color: "bg-purple-500",
  },
  {
    value: "dorm-supplies",
    label: "Dorm Supplies",
    description: "Bedding, storage, and room essentials",
    icon: HomeIcon,
    color: "bg-green-500",
  },
  {
    value: "furniture",
    label: "Furniture",
    description: "Desks, chairs, and room furnishings",
    icon: Sofa,
    color: "bg-yellow-500",
  },
  {
    value: "clothing",
    label: "Clothing",
    description: "Apparel and fashion items",
    icon: Shirt,
    color: "bg-pink-500",
  },
  {
    value: "sports",
    label: "Sports & Fitness",
    description: "Athletic gear and equipment",
    icon: Dumbbell,
    color: "bg-orange-500",
  },
  {
    value: "other",
    label: "Other",
    description: "Everything else",
    icon: Package,
    color: "bg-gray-500",
  },
];

export default function CategoriesPage() {
  // Calculate product counts per category
  const getCategoryCount = (category: Category) => {
    return mockProducts.filter((p) => p.category === category).length;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Browse by Category</h1>
            <p className="text-muted-foreground text-lg">
              Find exactly what you need in your campus marketplace
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = getCategoryCount(category.value);

              return (
                <Link key={category.value} href={`/products?category=${category.value}`}>
                  <Card className="group h-full transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div
                          className={`${category.color} mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-muted-foreground flex items-center gap-1 text-sm">
                          <Package className="h-4 w-4" />
                          {count}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{category.label}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group w-full justify-between">
                        Browse {category.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Popular Items Section */}
          <div className="mt-16">
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">Popular This Week</h2>
              <p className="text-muted-foreground">
                Check out the most viewed items across all categories
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mockProducts
                .sort((a, b) => b.views - a.views)
                .slice(0, 4)
                .map((product) => {
                  const category = categories.find((c) => c.value === product.category);
                  const Icon = category?.icon || Package;

                  return (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <Card className="group transition-all hover:shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={`${category?.color || "bg-gray-500"} flex h-10 w-10 shrink-0 items-center justify-center rounded text-white`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="line-clamp-2 text-sm font-semibold">
                                {product.title}
                              </h3>
                              <p className="text-primary mt-1 text-lg font-bold">
                                ${product.price.toFixed(2)}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {product.views} views
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
