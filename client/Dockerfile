# use an existing docker image as a base
FROM node:16-alpine as builder
WORKDIR '/app'

# Download and install a dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html