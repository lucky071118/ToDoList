FROM node:16-alpine3.15 AS express_server
WORKDIR /home/node/app
COPY express_server .
RUN npm install
CMD ["/bin/sh"]
