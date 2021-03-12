FROM node:14.16.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

ENV PGUSER=dbuser \
  PGHOST=database.server.com \
  PGPASSWORD=secretpassword \
  PGDATABASE=mydb \
  PGPORT=3211

ENV FAST_API_PORT=8080

COPY . .

EXPOSE ${FAST_API_PORT}

CMD [ "npm", "start" ]