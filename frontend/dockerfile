# Multi-stage Dockerfile for Next.js frontend
# Builder: installs dependencies (including dev deps) and builds the app
FROM node:22-alpine AS builder

WORKDIR /app

# Install build-time dependencies using the lockfile for reproducible installs
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

# Copy rest of the source and build
COPY . .
RUN npm run build

# Runner: smaller image with only production dependencies + built app
FROM node:22-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install only production dependencies (uses lockfile)
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci --omit=dev

# Copy built Next.js app and static files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Copy package.json for the start script
COPY --from=builder /app/package.json ./package.json

# If you use environment files or other runtime files, copy them here
# COPY .env.production ./

EXPOSE 3000

# Use npm start (next start) to serve the production build
CMD ["npm", "start"]