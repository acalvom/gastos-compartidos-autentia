FROM node:18

RUN apt-get update && \
    apt-get install -y xdg-utils && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /gastos-compartidos-autentia
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]
