"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Condition, FilterOptions } from "@/types";

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  resultsCount?: number;
}

const categories: { value: Category; label: string }[] = [
  { value: "textbooks", label: "Textbooks" },
  { value: "electronics", label: "Electronics" },
  { value: "dorm-supplies", label: "Dorm Supplies" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "other", label: "Other" },
];

const conditions: { value: Condition; label: string }[] = [
  { value: "new", label: "New" },
  { value: "like-new", label: "Like New" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
  { value: "poor", label: "Poor" },
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
];

/**
 * Product filters sidebar component
 * @param filters - Current filter state
 * @param onFiltersChange - Filter change handler
 * @param resultsCount - Number of results
 */
export function ProductFilters({
  filters,
  onFiltersChange,
  resultsCount,
}: ProductFiltersProps) {
  const [showFilters, setShowFilters] = React.useState(false);

  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category ? (category as Category) : undefined,
    });
  };

  const handleConditionToggle = (condition: Condition) => {
    const currentConditions = filters.condition || [];
    const newConditions = currentConditions.includes(condition)
      ? currentConditions.filter((c) => c !== condition)
      : [...currentConditions, condition];
    onFiltersChange({ ...filters, condition: newConditions });
  };

  const handlePriceChange = (minPrice?: number, maxPrice?: number) => {
    onFiltersChange({ ...filters, minPrice, maxPrice });
  };

  const handleSortChange = (sortBy: string) => {
    onFiltersChange({
      ...filters,
      sortBy: sortBy as FilterOptions["sortBy"],
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const activeFiltersCount = [
    filters.category,
    filters.condition?.length,
    filters.minPrice,
    filters.maxPrice,
    filters.search,
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Search and Sort Bar */}
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search products..."
            value={filters.search || ""}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Sort */}
        <Select value={filters.sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Mobile Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>

      {/* Results Count */}
      {resultsCount !== undefined && (
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <span>{resultsCount} products found</span>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-1 h-3 w-3" />
              Clear all
            </Button>
          )}
        </div>
      )}

      {/* Filter Sidebar */}
      <div className={`space-y-6 ${showFilters ? "block" : "hidden"} sm:block`}>
        {/* Category Filter */}
        <div>
          <Label className="mb-3 block text-base font-semibold">Category</Label>
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <Label className="mb-3 block text-base font-semibold">Price Range</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ""}
              onChange={(e) =>
                handlePriceChange(
                  e.target.value ? Number(e.target.value) : undefined,
                  filters.maxPrice
                )
              }
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                handlePriceChange(
                  filters.minPrice,
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
            />
          </div>
        </div>

        {/* Condition Filter */}
        <div>
          <Label className="mb-3 block text-base font-semibold">Condition</Label>
          <div className="flex flex-wrap gap-2">
            {conditions.map((cond) => {
              const isSelected = filters.condition?.includes(cond.value);
              return (
                <Badge
                  key={cond.value}
                  variant={isSelected ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleConditionToggle(cond.value)}
                >
                  {cond.label}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
