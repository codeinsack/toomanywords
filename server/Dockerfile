FROM node:14

ARG mongodbuser
ARG mongodbpassword

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV MONGODB_USER=$mongodbuser
ENV MONGODB_PASSWORD=$mongodbpassword

CMD ["npm", "run", "start-prod"]
