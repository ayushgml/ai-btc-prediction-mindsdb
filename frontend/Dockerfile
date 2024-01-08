FROM node:20.04

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]