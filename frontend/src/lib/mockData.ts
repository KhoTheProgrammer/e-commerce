import { Product, Category } from "@/types";

/**
 * Mock products data for demonstration
 */
export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Calculus Early Transcendentals (9th Edition)",
    description:
      "Comprehensive calculus textbook in excellent condition. Minimal highlighting, all pages intact.",
    price: 75.0,
    category: "textbooks",
    condition: "like-new",
  images: ["/placeholders/product.svg"],
    sellerId: "user1",
    sellerName: "Sarah Johnson",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "Main Campus",
    createdAt: "2025-10-28T10:00:00Z",
    updatedAt: "2025-10-28T10:00:00Z",
    views: 156,
    isFeatured: true,
    tags: ["math", "textbook", "calculus"],
  },
  {
    id: "2",
    title: 'MacBook Pro 13" (2021, M1)',
    description:
      "Gently used MacBook Pro with M1 chip, 8GB RAM, 256GB SSD. Includes charger and original box.",
    price: 850.0,
    category: "electronics",
    condition: "good",
  images: ["/placeholders/product.svg"],
    sellerId: "user2",
    sellerName: "Mike Chen",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "North Campus",
    createdAt: "2025-10-27T14:30:00Z",
    updatedAt: "2025-10-27T14:30:00Z",
    views: 289,
    isFeatured: true,
    tags: ["laptop", "apple", "electronics"],
  },
  {
    id: "3",
    title: "Twin XL Bed Sheet Set - Navy Blue",
    description:
      "Brand new twin XL sheet set, perfect for dorm beds. 100% cotton, never used.",
    price: 25.0,
    category: "dorm-supplies",
    condition: "new",
  images: ["/placeholders/product.svg"],
    sellerId: "user3",
    sellerName: "Emma Davis",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "West Dorms",
    createdAt: "2025-10-26T09:15:00Z",
    updatedAt: "2025-10-26T09:15:00Z",
    views: 78,
    isFeatured: false,
    tags: ["bedding", "dorm", "sheets"],
  },
  {
    id: "4",
    title: "IKEA Study Desk - White",
    description:
      "Compact study desk, perfect for small dorm rooms. Easy to assemble, minor scratches.",
    price: 40.0,
    category: "furniture",
    condition: "good",
  images: ["/placeholders/product.svg"],
    sellerId: "user4",
    sellerName: "Alex Thompson",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "East Campus",
    createdAt: "2025-10-25T16:45:00Z",
    updatedAt: "2025-10-25T16:45:00Z",
    views: 134,
    isFeatured: false,
    tags: ["furniture", "desk", "study"],
  },
  {
    id: "5",
    title: "Nike Running Shoes - Size 10",
    description:
      "Barely worn Nike running shoes, size 10. Great for jogging around campus.",
    price: 55.0,
    category: "sports",
    condition: "like-new",
  images: ["/placeholders/product.svg"],
    sellerId: "user5",
    sellerName: "Jordan Lee",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "Sports Complex",
    createdAt: "2025-10-24T11:20:00Z",
    updatedAt: "2025-10-24T11:20:00Z",
    views: 92,
    isFeatured: false,
    tags: ["shoes", "sports", "nike"],
  },
  {
    id: "6",
    title: "Introduction to Psychology Textbook",
    description: "PSY 101 required textbook. Good condition with some highlighting.",
    price: 45.0,
    category: "textbooks",
    condition: "good",
  images: ["/placeholders/product.svg"],
    sellerId: "user6",
    sellerName: "Lisa Martinez",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "Library",
    createdAt: "2025-10-23T13:00:00Z",
    updatedAt: "2025-10-23T13:00:00Z",
    views: 167,
    isFeatured: true,
    tags: ["textbook", "psychology", "101"],
  },
  {
    id: "7",
    title: "iPad Air (4th Gen) with Apple Pencil",
    description:
      "iPad Air with 64GB storage, includes 2nd gen Apple Pencil. Perfect for note-taking.",
    price: 450.0,
    category: "electronics",
    condition: "like-new",
  images: ["/placeholders/product.svg"],
    sellerId: "user7",
    sellerName: "Ryan Park",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "Main Campus",
    createdAt: "2025-10-22T08:30:00Z",
    updatedAt: "2025-10-22T08:30:00Z",
    views: 234,
    isFeatured: true,
    tags: ["tablet", "ipad", "apple", "electronics"],
  },
  {
    id: "8",
    title: "Mini Fridge - Black (3.2 cu ft)",
    description:
      "Compact mini fridge, works perfectly. Great for keeping drinks and snacks cold.",
    price: 60.0,
    category: "dorm-supplies",
    condition: "good",
  images: ["/placeholders/product.svg"],
    sellerId: "user8",
    sellerName: "Olivia Brown",
  sellerAvatar: "/placeholders/avatar.svg",
    location: "South Dorms",
    createdAt: "2025-10-21T15:10:00Z",
    updatedAt: "2025-10-21T15:10:00Z",
    views: 145,
    isFeatured: false,
    tags: ["fridge", "appliance", "dorm"],
  },
];

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return mockProducts.filter((p) => p.isFeatured);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: Category): Product[] {
  return mockProducts.filter((p) => p.category === category);
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

/**
 * Search products
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
