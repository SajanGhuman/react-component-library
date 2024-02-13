FROM node:latest
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run storybook
RUN npm install -g http-server
CMD ["http-server", "storybook-static", "-p 8083"]