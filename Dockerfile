# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use Nginx to serve the built Angular app
FROM nginx:1.25.3-alpine

# Copy the built Angular app to the Nginx HTML directory
COPY --from=build /app/dist/trubridgeui /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]