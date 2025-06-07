FROM node:20-alpine
WORKDIR /
ENV PORT 8000
ENV HOST 0.0.0.0
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY prisma ./prisma/

COPY tsconfig.json ./
COPY . .

RUN yarn
RUN npx prisma generate
RUN yarn build
COPY . ./
EXPOSE 8000
CMD [ "yarn","start" ]
