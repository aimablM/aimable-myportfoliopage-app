# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (layer cache optimization)
COPY package*.json ./
RUN npm install

# Copy source files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy optimized static files to NGINX public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Replace the default NGINX config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (your host NGINX will proxy here)
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
