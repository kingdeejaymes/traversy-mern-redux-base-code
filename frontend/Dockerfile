# COMMANDS IF WERE NOT RUNNING ON NGINX and LOCAL ONLY
FROM node:16-alpine as build-stage

WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm","start"]



# COMMANDS IF WE ARE RUNNING ON NGINX
# Stage 1
# FROM node:16-alpine as build-stage

# WORKDIR /frontend
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /frontend/build /usr/share/nginx/html

# EXPOSE 3000

# CMD nginx -g 'daemon off;'