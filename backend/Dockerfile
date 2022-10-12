FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /backend

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm","run", "server" ]