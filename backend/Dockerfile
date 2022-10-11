FROM node:16-alpine

WORKDIR /backend

COPY package.json .

COPY . .

RUN npm install

CMD [ "npm","run", "server" ]