# Use a lightweight Node image to build the app
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy and build the app
COPY . .

# Use an Nginx image to serve the app
EXPOSE 5000
CMD ["npm","run","start"]