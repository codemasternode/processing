ARG NODE_IMAGE_VERSION

FROM node:$NODE_IMAGE_VERSION

WORKDIR /app

COPY package.json /app
COPY . .

RUN node -v
RUN npm install
