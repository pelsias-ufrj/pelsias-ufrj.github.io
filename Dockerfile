FROM node:latest

LABEL maintainer="Lukas Muller"

COPY . /var/www

WORKDIR /var/www

RUN npm install 

ENTRYPOINT [ "npm","start" ]

EXPOSE 8080
