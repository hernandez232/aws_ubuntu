# Use a lightweight Node image to build the app
FROM node:16-alpine AS build

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy and build the app
COPY . .
RUN npm run build

# Use an Nginx image to serve the app
FROM nginx:1.24-alpine
WORKDIR /app/build /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]