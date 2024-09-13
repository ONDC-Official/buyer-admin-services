FROM node:18.17.0-alpine as BUILD_IMAGE

ARG NEXT_PUBLIC_PROJECT_ID
ENV NEXT_PUBLIC_PROJECT_ID=$NEXT_PUBLIC_PROJECT_ID

WORKDIR /app
COPY package.json ./
# install dependencies
RUN npm install --legacy-peer-deps
COPY . .
# build
RUN npm run build --debug

FROM node:alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/next.config.js ./next.config.js
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]