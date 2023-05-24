// Maak een variabele genaamd leeftijd en geef deze de waarde je leeftijd.
// Maak een lege variabele genaamd leeftijdsgroep
// Gebruik een if-else constructie om de leeftijdsgroep te bepalen op basis van de leeftijd
// Controleer of de leeftijd kleiner is dan of gelijk aan 12 (Kind)
// Als de eerste voorwaarde niet waar is, controleer dan of de leeftijd kleiner is dan of gelijk aan 17 (Tiener)
// Als de vorige voorwaarden niet waar zijn, controleer dan of de leeftijd kleiner is dan of gelijk aan 25 (Jongvolwassene)
// Als de vorige voorwaarden niet waar zijn, controleer dan of de leeftijd kleiner is dan of gelijk aan 59 (Volwassene)
// Als geen van de bovenstaande voorwaarden waar is, wordt de leeftijdsgroep ingesteld op "Oudere"

// Proeber de waarde van leeftijd 0 te zetten en probeeer dat nu op te lossen.

let leeftijd = 20;
let leeftijdsgroep;

if (leeftijd <= 12) {
  leeftijdsgroep = "Kind";
} else if (leeftijd <= 17) {
  leeftijdsgroep = "Tiener";
} else if (leeftijd <= 25) {
  leeftijdsgroep = "Jongvolwassene";
} else if (leeftijd <= 59) {
  leeftijdsgroep = "Volwassene";
} else {
  leeftijdsgroep = "Oudere";
}
