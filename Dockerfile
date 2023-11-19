FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN export NODE_OPTIONS=–openssl-legacy-provider
RUN yarn install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
