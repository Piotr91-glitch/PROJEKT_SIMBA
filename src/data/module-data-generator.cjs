const fs = require("fs");

// Liczba generowanych obiektów (domyślnie 10)
const count = Number(process.argv[2]) || 10;

// Przykładowe dane
const names = ["Yamaha", "Ducati", "BMW", "Harley-Davidson", "Suzuki"];
const colors = ["red", "blue", "black", "white", "yellow"];

// Generowanie danych
const generateData = () => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    rating: Math.floor(Math.random() * 11), // Generowanie rating od 0 do 10
  }));
};


// Tworzenie pliku w katalogu src
const data = generateData();
const content = `export const motorData = ${JSON.stringify(data, null, 2)};`;

fs.writeFile("./src/module-data.js", content, (err) => {
  if (err) {
    console.error("Błąd zapisu pliku:", err);
  } else {
    console.log("Dane zostały wygenerowane do src/module-data.js");
  }
});
