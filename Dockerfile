FROM node:6.2.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

EXPOSE 3000
ENTRYPOINT ["npm","start"]