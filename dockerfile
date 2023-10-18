FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS prod

WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]