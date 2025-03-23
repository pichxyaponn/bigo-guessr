
FROM oven/bun:latest AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app

# Install TypeScript dependencies
RUN bun add -d @types/react @types/node

# Copy only package files for better layer caching
COPY package.json bun.lock ./

# Install dependencies with platform-specific binaries for Tailwind CSS 4.0
RUN bun install --frozen-lockfile --production

# Install platform-specific Tailwind CSS binaries
RUN bun add @tailwindcss/oxide-linux-arm64-gnu @tailwindcss/oxide-linux-x64-gnu

# Stage 2: Build application
FROM base AS builder
WORKDIR /app

# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build-time environment variables
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=1

# Skip database connection during build
ENV SKIP_DATABASE_CHECK=true

# Build application
RUN bun run build

# Stage 3: Create final production image
FROM base AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=1777
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN adduser --system --no-create-home --uid 1001 next15ws

# Copy necessary files from builder
COPY --from=builder --chown=next15ws:next15ws /app/.next/standalone ./
COPY --from=builder --chown=next15ws:next15ws /app/.next/static ./.next/static
COPY --from=builder /app/migrate-and-start.sh .
COPY --from=builder /app/public ./public

USER next15ws

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT}/api/health || exit 1

# Start application
CMD ["./migrate-and-start.sh"]
