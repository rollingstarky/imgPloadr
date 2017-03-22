FROM node:4.2.2

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

ENTRYPOINT ["npm","start"]