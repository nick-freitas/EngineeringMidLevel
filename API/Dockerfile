#Use node 7.10
FROM node:latest

#set the env vars
ENV RAFR_DB_HOST localhost
ENV RAFR_DB_NAME rafr
ENV RAFR_DB_USERNAME root
ENV NODE_ENV production

#todo Do db setup

#create working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install dependencies
COPY package.json /usr/src/app/
RUN npm i

#copy files
COPY . /usr/src/app

#generate models
CMD ["npm", "run", "generate-models"]

#expose port
EXPOSE 3000

#start
#CMD ["npm", "start"]
