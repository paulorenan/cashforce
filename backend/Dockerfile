FROM node:16.14.0

WORKDIR /back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npx", "sequelize", "db:create", "&&", "npx", "sequelize", "db:migrate"]

