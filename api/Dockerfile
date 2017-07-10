# This image will be based on the official nodejs docker image
FROM node:latest

# Install dependencies
COPY . /src
WORKDIR /src
RUN npm install
# Tell Docker we are going to use this port
EXPOSE 3000

# The command to run our app when the container is run
CMD ["npm", "start"]