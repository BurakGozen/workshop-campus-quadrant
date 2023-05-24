// Maak een lege variabele genaamd kost
// Definieer een functie genaamd "beoordeelStudent" met drie parameters: "score", "aanwezigheid" en "opdrachten"
// Als score,aanwezigheid en opdrachten hoger zijn dan of gelijk aan 90, geef de beoordeling "Uitstekend"
// Als score,aanwezigheid en opdrachten hoger zijn dan of gelijk aan 80, geef de beoordeling "Goed"
// Als score,aanwezigheid en opdrachten hoger zijn dan of gelijk aan 70, geef de beoordeling "Voldoende"
// In alle andere gevallen, geef de beoordeling "Onvoldoende"
// Retourneer de beoordeling
// Roep de functie aan en sla het resultaat op in een variabele genaamd "resultaat"

// Tip: Gebruik "&&"

let beoordeling;

function beoordeelStudent(score, aanwezigheid, opdrachten) {
  if (score >= 90 && aanwezigheid >= 90 && opdrachten >= 90) {
    beoordeling = "Uitstekend";
  } else if (score >= 80 && aanwezigheid >= 80 && opdrachten >= 80) {
    beoordeling = "Goed";
  } else if (score >= 70 && aanwezigheid >= 70 && opdrachten >= 70) {
    beoordeling = "Voldoende";
  } else {
    beoordeling = "Onvoldoende";
  }
  return beoordeling;
}

let resultaat = beoordeelStudent(85, 92, 88);
