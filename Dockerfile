FROM node:21-alpine3.17
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
