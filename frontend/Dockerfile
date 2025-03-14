#Stage 1: build Vite App
FROM node:18 AS builder
WORKDIR /app
#copy package files and install dependencies
COPY package*.json ./
RUN npm install
#copy all files and build the project
COPY . .
RUN npm run build

#Stage 3: serve with nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html

#remove default nginx static files
RUN rm -rf ./*

#copy built files form previous stage
COPY --from=builder /app/dist .

# Copy Custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose port for web traffic
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]