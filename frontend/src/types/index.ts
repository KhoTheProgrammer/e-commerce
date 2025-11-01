/**
 * Product category types for CampusCart
 */
export type Category =
  | "textbooks"
  | "electronics"
  | "dorm-supplies"
  | "furniture"
  | "clothing"
  | "sports"
  | "other";

/**
 * Product condition ratings
 */
export type Condition = "new" | "like-new" | "good" | "fair" | "poor";

/**
 * Product interface representing items for sale
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  condition: Condition;
  images: string[];
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  isFeatured: boolean;
  tags: string[];
}

/**
 * User interface for authentication and profiles
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  university: string;
  major?: string;
  graduationYear?: number;
  phone?: string;
  bio?: string;
  joinedAt: string;
  rating: number;
  totalSales: number;
  totalPurchases: number;
}

/**
 * Cart item interface
 */
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  addedAt: string;
}

/**
 * Shopping cart interface
 */
export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}

/**
 * Order status types
 */
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";

/**
 * Order interface for purchase tracking
 */
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: OrderStatus;
  subtotal: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Address interface for shipping
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * Review interface for product/seller ratings
 */
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

/**
 * Filter options for product search
 */
export interface FilterOptions {
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  condition?: Condition[];
  search?: string;
  sortBy?: "newest" | "price-low" | "price-high" | "popular";
}
