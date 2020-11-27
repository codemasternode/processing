ARG NODE_IMAGE_VERSION
ARG NODE_PORT
ARG NODE_PORT_INSPECTOR

FROM node:$NODE_IMAGE_VERSION
EXPOSE ${NODE_PORT} ${NODE_PORT_INSPECTOR}

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm install

COPY . /home/app

CMD ./start.sh