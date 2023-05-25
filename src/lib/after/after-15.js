const { app, title } = init();

render();

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "w":
      if (typeof y != "undefined" && typeof vooruit != "undefined") vooruit();
      break;
    case "s":
      if (typeof y != "undefined" && typeof achteruit != "undefined") achteruit();
      break;
    case "a":
      if (typeof x != "undefined" && typeof links != "undefined") links();
      break;
    case "d":
      if (typeof x != "undefined" && typeof rechts != "undefined") rechts();
      break;
  }

  render();
});

function render() {
  const items = Array(81).fill(`<div class="frog-item">&nbsp;</div>`);

  if (typeof x != "undefined" && typeof y != "undefined") {
    const coordinate = x + 9 * y;
    items[coordinate] = `<div class="frog-item frog">&nbsp;</div>`;
  }

  app.classList.add("frog-container");
  app.innerHTML = items.join("");
}

// if (typeof korting !== "undefined") {
//   title.createElement(korting, (title) => `De toegepaste korting is: €${title}`);
// }

// Maak een lege variabele genaamd korting
// Definieer een functie genaamd "berekenKorting" met één parameter: "aankoopbedrag"
// Als het aankoopbedrag groter of gelijk is aan 500, pas 20% korting toe
// Extra berekening: Voeg nog eens 5% extra korting toe als het aankoopbedrag groter is dan 1000
// Als het aankoopbedrag groter of gelijk is aan 300, pas 15% korting toe
// Als het aankoopbedrag groter of gelijk is aan 200, pas 10% korting toe
// Extra berekening: Voeg 5 euro extra korting toe als het aankoopbedrag groter is dan 250
// In alle andere gevallen, pas geen korting toe
// Retourneer de berekende korting
// Roep de functie aan en sla het resultaat op in een variabele genaamd "resultaat"

// let korting;

// function berekenKorting(aankoopbedrag) {
//   if (aankoopbedrag >= 500) {
//     korting = aankoopbedrag * 0.2;

//     if (aankoopbedrag > 1000) {
//       korting += aankoopbedrag * 0.05;
//     }
//   } else if (aankoopbedrag >= 300) {
//     korting = aankoopbedrag * 0.15;
//   } else if (aankoopbedrag >= 200) {
//     korting = aankoopbedrag * 0.1;

//     if (aankoopbedrag > 250) {
//       korting += 5;
//     }
//   } else {
//     korting = 0;
//   }

//   return korting;
// }

// let resultaat = berekenKorting(1200);
