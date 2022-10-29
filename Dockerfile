FROM node:16-alpine3.15 AS express_server
WORKDIR /home/node/app
COPY express_server .
RUN npm install
CMD ["npm", "start"]



FROM node:16-alpine3.15 AS react_server
WORKDIR /home/node/app
COPY react_server .
RUN npm install
CMD ["npm", "start"]
