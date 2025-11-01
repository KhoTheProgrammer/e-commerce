# CampusCart - University Marketplace Frontend

A modern, feature-rich ecommerce marketplace built specifically for university students to buy and sell textbooks, electronics, dorm supplies, and campus essentials.

## 🎯 Features

- **Modern UI/UX**: Built with Next.js 16, React 19, and shadcn/ui components
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Type-Safe**: Full TypeScript implementation with strict type checking
- **Modular Architecture**: Feature-based component organization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized with Next.js App Router and Turbopack

## 🎨 Design System

### Color Palette

- **Primary**: `#2563eb` (Blue) - Call-to-action buttons, links
- **Secondary**: `#8b5cf6` (Purple) - Accents, featured items
- **Background**: `#f8fafc` (Light Gray) - Page background
- **Text**: `#1e293b` (Dark Blue-Gray) - Primary text

### Typography

- **Font Family**: Inter (Google Fonts)
- Clean, modern sans-serif optimized for readability

## 📦 Tech Stack

- **Framework**: Next.js 16.0.1 (App Router, Turbopack)
- **React**: 19.2.0
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Inter font
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & theme variables
├── components/
│   ├── auth/              # Authentication components
│   │   └── AuthForms.tsx  # Login & Register forms
│   ├── cart/              # Shopping cart
│   │   └── ShoppingCart.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── products/          # Product components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductFilters.tsx
│   ├── shared/            # Reusable utilities
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   └── ui/                # shadcn/ui base components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── dialog.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       └── separator.tsx
├── lib/
│   ├── utils.ts           # Utility functions (cn, formatPrice, etc.)
│   └── mockData.ts        # Sample product data
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- **pnpm** (Package Manager)
- Git

### Installation

1. **Install pnpm** (if not already installed):

   ```bash
   npm install -g pnpm
   ```

2. **Navigate to frontend directory**:

   ```bash
   cd frontend
   ```

3. **Install dependencies**:

   ```bash
   pnpm install
   ```

4. **Run development server**:

   ```bash
   pnpm dev
   ```

5. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev              # Start development server (Turbopack)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors automatically
pnpm format           # Format code with Prettier
pnpm format:check     # Check if code is formatted
```

## 🔧 Code Quality & Pre-commit Hooks

This project uses **Husky** for pre-commit hooks that automatically:

- ✅ Format code with **Prettier**
- ✅ Fix linting errors with **ESLint**
- ✅ Ensure code quality before commits

### Pre-commit Hook Setup

When you commit code, the following happens automatically:

1. **Prettier** formats your staged files
2. **ESLint** checks and fixes linting issues
3. If any unfixable errors exist, commit is blocked

For detailed information, see [DEVELOPMENT.md](./DEVELOPMENT.md)

### Manual Commands

```bash
# Format all files
pnpm format

# Check formatting
pnpm format:check

# Lint all files
pnpm lint

# Fix linting errors
pnpm lint:fix
```

## 📱 Key Components

### Header Component

- Responsive navigation with mobile menu
- Search bar with icon
- Cart with item count badge
- User profile dropdown
- "Sell Item" CTA button

### Product Components

**ProductCard**

- Product image with hover effects
- Wishlist heart button
- Condition badge
- Price display
- Seller information
- Location tag

**ProductGrid**

- Responsive grid layout (1-4 columns)
- Loading states
- Error handling
- Empty state messaging

**ProductFilters**

- Search input
- Category dropdown
- Price range inputs
- Condition badges
- Sort options
- Active filter count

### Shopping Cart

- Slide-in drawer (mobile-friendly)
- Item quantity controls
- Remove item functionality
- Subtotal, tax, and total calculations
- Empty cart state
- Checkout button

### Authentication Forms

- Login dialog with email/password
- Registration form with validation
- Form error handling
- Switch between login/register
- Password strength requirements
- University field for students

## 🎨 Styling Approach

### Tailwind CSS Configuration

- Inline theme configuration using `@theme`
- CSS custom properties for colors
- Dark mode support
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Component Patterns

- **cn()** utility for conditional classes
- Class Variance Authority (CVA) for variant-based styling
- Consistent spacing and sizing scales
- Hover and focus states for accessibility

## 📝 Type Definitions

### Core Types

**Product**

```typescript
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  condition: Condition;
  images: string[];
  sellerId: string;
  sellerName: string;
  location: string;
  // ... additional fields
}
```

**Cart**

```typescript
interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}
```

See `src/types/index.ts` for complete type definitions.

## 🔧 Utility Functions

### Formatting

- `formatPrice(price: number)`: Format to USD currency
- `formatDate(date: Date | string)`: Human-readable date
- `truncateText(text: string, length: number)`: Truncate with ellipsis
- `slugify(text: string)`: Generate URL-friendly slugs

### Styling

- `cn(...inputs)`: Merge Tailwind classes with conflict resolution

## 🎯 Best Practices Implemented

### Code Quality

- ✅ Comprehensive JSDoc comments on all functions
- ✅ Strict TypeScript with no implicit any
- ✅ Modular components (< 150 lines each)
- ✅ Consistent naming conventions
- ✅ Proper error boundaries and loading states

### Accessibility

- ✅ Semantic HTML elements
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images

### Performance

- ✅ Next.js Image optimization
- ✅ Code splitting by route
- ✅ Lazy loading of components
- ✅ Optimized bundle size

### User Experience

- ✅ Loading spinners for async operations
- ✅ Error messages with context
- ✅ Form validation with helpful errors
- ✅ Empty states with guidance
- ✅ Mobile-responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the CampusCart ecommerce platform.

## 🤝 Contributing

1. Follow the established code style
2. Add JSDoc comments to new functions
3. Maintain type safety
4. Test on multiple screen sizes
5. Ensure accessibility standards

---

**Built with ❤️ for university students**
