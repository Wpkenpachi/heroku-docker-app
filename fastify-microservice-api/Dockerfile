FROM node:14.16.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

ENV FAST_API_HOST=0.0.0.0

COPY . .

CMD [ "npm", "start" ]