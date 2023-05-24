// Maak een variabele genaamd resultaat1 waar je je isLangerDan functie oproept en 2 waardes mee geeft
// Maak een variabele genaamd resultaat2 waar je je isLangerDan functie oproept en 2 waardes mee geeft
// Maak een functie genaamd isLangerDan(eersteWoord, tweedeWoord) die true of false terug geeft.
// Deze functie moet controlren of eersteWoord langer is dan tweedeWoord als dat zo is geeft het true terug anderes false.

// Tip: Als je de lengte van een variabele in JavaScript wilt achterhalen, kun je de eigenschap .length gebruiken. plak het achter je variabele.

let resultaat1 = isLangerDan("Ozkann", "Burak");
let resultaat2 = isLangerDan("sfsdf", "sdfsdf");
let resultaat3 = isLangerDan("sdfsdf", "sdfsdfsdf");
let resultaat4 = isLangerDan("sdfsdfsdf", "sdf");
let resultaat5 = isLangerDan("sfsdf", "Bursdfsdfsak");

function isLangerDan(eersteWoord, tweedeWoord) {
  return eersteWoord.length > tweedeWoord.length;
}
