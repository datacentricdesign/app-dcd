# stage1 as builder
FROM node:lts-alpine as builder
ARG CONFIGURATION

# copy the package.json to install dependencies
COPY package*.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /app-dcd && mv ./node_modules ./app-dcd

WORKDIR /app-dcd

COPY . .

# Build the project and copy the files
RUN npm run build -- --configuration ${CONFIGURATION}

FROM nginx:1.19

#!/bin/sh

COPY ./nginx/ /etc/nginx/

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app-dcd/dist /usr/share/nginx/html/app-dcd

CMD ["nginx", "-g", "daemon off;"]