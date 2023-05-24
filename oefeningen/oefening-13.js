// Maak een lege variabele genaamd kost
// Definieer de functie berekenVerzendkosten(gewicht) om de verzendkosten te berekenen
// Controleer of het gewicht kleiner of gelijk is aan 0
// Als het gewicht kleiner of gelijk is aan 0, retourneer de boodschap "Ongeldig gewicht"
// Als het gewicht kleiner of gelijk is aan 7, retourneer de verzendkosten 5
// Als het gewicht kleiner of gelijk is aan 3, retourneer de verzendkosten 7
// Als het gewicht kleiner of gelijk is aan 5, retourneer de verzendkosten 10
// Als geen van de bovenstaande voorwaarden waar is, retourneer de boodschap "Neem contact met ons op voor verzendkosten"
// Retourneer de kost

// Maak een variabele genaamd berekening waar je je berekenVerzendkosten functie oproept en een waarde mee geeft -> buiten de functie

let kost;

function berekenVerzendkosten(gewicht) {
  if (gewicht <= 0) {
    kost = "Ongeldig gewicht";
  } else if (gewicht <= 7) {
    kost = 5;
  } else if (gewicht <= 3) {
    kost = 7;
  } else if (gewicht <= 5) {
    kost = 10;
  } else {
    kost = "Neem contact met ons op voor verzendkosten";
  }

  return kost;
}
let berekening = berekenVerzendkosten(5);
