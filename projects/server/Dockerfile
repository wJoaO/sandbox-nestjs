FROM node:18-alpine

USER node
WORKDIR /home/node

COPY --chown=node:node . .
RUN yarn install
RUN yarn build
EXPOSE 3000

CMD ["node", "dist/main.js"]