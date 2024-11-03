# Base Image
FROM node:14-alpine

WORKDIR /usr/app

# install dependencies
COPY ./package.json tsconfig.json nodemon.json ./
RUN npm install
COPY src ./src

# Build apidoc
COPY apidoc.json .
RUN npx apidoc -i . -o docs

# Default command
CMD ["npm", "start"]