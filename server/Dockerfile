FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
EXPOSE 5000
CMD ["node", "src/server.js"]
