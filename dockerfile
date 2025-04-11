# Step 1: Use Node.js as the base image
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the app's source code
COPY . .

# Step 5: Expose Angular default port
EXPOSE 4200

# Step 6: Run Angular app
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
