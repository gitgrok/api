FROM node:14-alpine3.12
USER node
WORKDIR /home/node
COPY --chown=node:node . /home/node
RUN npm ci
ENV NODE_ENV=production
RUN npm run build
CMD ["node", "dist/main.js"]