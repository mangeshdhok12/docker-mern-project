# TASK 9: Basic Dockerfile: Write a Dockerfile for a Node.js Express application that installs dependencies and runs the server on port 3000.


FROM node:20.11.0
WORKDIR /app

RUN npm install -g nodemon
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run", "start"]
