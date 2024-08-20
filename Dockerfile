FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 5055
