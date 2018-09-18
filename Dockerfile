FROM node:10
ENV APP=/app
COPY package.json yarn.lock $APP/
WORKDIR $APP
RUN yarn install
COPY /src $APP/src
RUN yarn run build
EXPOSE 80
CMD ["yarn", "run", "serve"]
