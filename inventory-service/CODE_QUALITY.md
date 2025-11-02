# Inventory Service - Code Quality Configuration

## ✅ Configured Tools

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Jest**: Testing framework

---

## 📝 Available Scripts

### Formatting

```bash
# Format all files
pnpm run format

# Check formatting without modifying
pnpm run format:check
```

### Linting

```bash
# Check for linting issues
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix
```

### Development

```bash
# Start development server with hot reload
pnpm run start:dev

# Start in debug mode
pnpm run start:debug

# Build for production
pnpm run build

# Start production server
pnpm run start:prod
```

### Testing

```bash
# Run all tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:cov

# Run e2e tests
pnpm run test:e2e
```

---

## 🎨 Prettier Configuration

**File**: `.prettierrc`

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "endOfLine": "lf",
  "arrowParens": "always",
  "bracketSpacing": true
}
```

---

## 🔍 ESLint Rules

**File**: `eslint.config.mjs`

### Key Rules:

- ✅ TypeScript strict type checking
- ⚠️  Warnings for `any` types
- ⚠️  Warnings for floating promises
- ❌ No unused variables (except those prefixed with `_`)
- ❌ No `var` keyword
- ✅ `const` preferred over `let`
- ⚠️  Console logs (except `console.warn` and `console.error`)

---

## 💡 VSCode Integration

**File**: `.vscode/settings.json`

### Features:

- ✅ Auto-format on save
- ✅ Auto-fix ESLint issues on save
- ✅ Prettier as default formatter
- ✅ TypeScript IntelliSense

### Required Extensions:

1. **ESLint** (`dbaeumer.vscode-eslint`)
2. **Prettier** (`esbenp.prettier-vscode`)

---

## 🚀 Pre-commit Workflow

Before committing:

```bash
# 1. Format code
pnpm run format

# 2. Fix linting issues
pnpm run lint:fix

# 3. Run tests
pnpm run test

# 4. Stage and commit
git add .
git commit -m "feat(inventory): your message"
```

---

## 📋 Code Style Guidelines

### Naming Conventions

- **Classes**: PascalCase (e.g., `ProductService`)
- **Interfaces**: PascalCase (e.g., `IProduct`)
- **Functions/Methods**: camelCase (e.g., `findProduct`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **Files**: kebab-case (e.g., `product.service.ts`)

### NestJS Patterns

```typescript
// ✅ Good: Dependency injection
@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}
}

// ✅ Good: DTOs for validation
export class CreateProductDto {
  @IsString()
  title: string;
}

// ✅ Good: Explicit return types for public methods
async findAll(): Promise<Product[]> {
  return this.repository.find();
}

// ❌ Bad: Using 'any'
async findAll(): Promise<any> { }

// ❌ Bad: Console.log in production code
console.log('Debug message');
```

---

## 🐛 Common Issues & Fixes

### Issue: Floating Promise Warning

```typescript
// ❌ Bad
bootstrap();

// ✅ Good
void bootstrap();
```

### Issue: Unused Variables

```typescript
// ❌ Bad
async function handler(req, res, next) { }

// ✅ Good
async function handler(req, _res, _next) { }
```

### Issue: Any Type

```typescript
// ❌ Bad
const data: any = fetchData();

// ✅ Good
const data: Product[] = fetchData();
```

---

## 📊 Quality Metrics

Run these before submitting a PR:

```bash
# Zero linting errors/warnings
pnpm run lint

# All tests passing
pnpm run test

# Code coverage > 80%
pnpm run test:cov

# Code formatted consistently
pnpm run format:check
```

---

**Last Updated**: November 2, 2025
