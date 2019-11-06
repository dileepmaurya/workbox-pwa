FROM node:8-alpine

WORKDIR /usr/app
COPY . .
EXPOSE 6868
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]