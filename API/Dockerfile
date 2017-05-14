#Use node 7.10
FROM node:latest

#set the env vars
ENV RAFR_DB_HOST 172.17.0.2
ENV RAFR_DB_NAME rafr
ENV RAFR_DB_USERNAME root
ENV RAFR_DB_PASSWORD password
ENV NODE_ENV production

#create working dir
RUN mkdir /src
WORKDIR /src

#and move everything over
ADD . /src

#install dependencies
RUN npm i

#expose port
EXPOSE 3000

#generate models
#RUN npm run generate-models

#run tests
#RUN npm test

#start
RUN npm start
