FROM node:22-bullseye

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm ci

EXPOSE 4000

RUN npx prisma generate

CMD ["npm", "run", "dev"]