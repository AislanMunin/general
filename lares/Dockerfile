FROM ubuntu:latest
MAINTAINER rafael@fumasa.org
RUN apt-get update
RUN apt-get install -y nodejs build-essential nodejs-legacy npm git git-core
EXPOSE 8080
WORKDIR /var/lares
CMD [ "npm", "start" ]