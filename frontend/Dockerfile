FROM node:18-alpine

WORKDIR /app
COPY ./ /app
RUN npm install
COPY public ./public
COPY src ./src
CMD ["npm", "run", "start"]
EXPOSE 8080
# RUN npm run build
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html