# Use official Node runtime as a parent image
FROM node:8.6.0

# Create the app dir and make it the working dir
WORKDIR /app

# Install dependencies
COPY package.json .
RUN yarn install --prod

# Build everything
COPY . .
RUN yarn build

ENV PORT 8080

EXPOSE $PORT

# Run an http-server serving the dist dir
CMD yarn http-server -p $PORT dist
