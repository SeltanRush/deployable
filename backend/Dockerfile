FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN yarn

EXPOSE $PORT
CMD ["yarn", "start"]