# Use Node.js
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose your app port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
