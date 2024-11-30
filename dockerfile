# Używamy oficjalnego obrazu Node.js
FROM node:16-alpine

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Kopiujemy pliki package.json i package-lock.json do katalogu roboczego
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy resztę plików projektu
COPY . .

# Budujemy aplikację React
RUN npm run build

# Instalujemy serwer `serve` do serwowania plików statycznych
RUN npm install -g serve

# Eksponujemy port 3000
EXPOSE 3000

# Uruchamiamy aplikację
CMD ["serve", "-s", "build", "-l", "3000"]
