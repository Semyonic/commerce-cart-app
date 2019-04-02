# Stage 1 (compile angular)
FROM node:10-alpine as node
WORKDIR /commerce-app
COPY . .
RUN npm ci
RUN npm run build --prod

# Stage 2 (serve app via http)
FROM nginx:1.15-alpine
COPY --from=node commerce-app/dist/commerce-app /html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
