FROM node:14.16.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

ENV CONNECTION_STRING=postgres://jsdsraoymgxlko:1ff001c18e4945b08a039366c9322f388a973e08c9845ed8cb27900c35e305bc@ec2-3-87-180-131.compute-1.amazonaws.com:5432/d11l7mjgi05s25

ENV FAST_API_HOST=0.0.0.0

COPY . .

CMD [ "npm", "start" ]