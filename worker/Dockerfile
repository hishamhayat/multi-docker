# use an existing docker image as a base
FROM node:16-alpine
WORKDIR '/app'

# Download and install a dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm","run","start"]