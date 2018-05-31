FROM vuejs/ci

EXPOSE 8081

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install && npm cache verify

ENV NODE_ENV=production

RUN npm run build

# Remove unused directories
# RUN rm -rf ./src
RUN rm -rf ./build
