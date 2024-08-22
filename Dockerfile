#dung node verion > 20
FROM node:20


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

ENV PORT=3056

# Start the app
CMD ["node", "index.js"]