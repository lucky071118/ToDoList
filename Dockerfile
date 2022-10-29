FROM node:16-alpine3.15 AS express_server
WORKDIR /home/node/app
COPY express_server/package.json express_server/package-lock.json .
RUN npm install
COPY express_server .
CMD ["npm", "start"]



FROM node:16-alpine3.15 AS react_server
WORKDIR /home/node/app
COPY react_server/package.json react_server/package-lock.json .
RUN npm install
COPY react_server .
CMD ["npm", "start"]
