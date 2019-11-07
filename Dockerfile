FROM node:8-alpine

WORKDIR /usr/app
COPY . .
EXPOSE 6868
RUN npm install
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:6868 || exit 1
CMD ["npm", "run", "dev"]