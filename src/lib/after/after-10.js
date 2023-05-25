const { app, title } = init();

const results = [];

if (typeof resultaat1 !== "undefined") results.push(resultaat1);
if (typeof resultaat2 !== "undefined") results.push(resultaat2);
if (typeof resultaat3 !== "undefined") results.push(resultaat3);
if (typeof resultaat4 !== "undefined") results.push(resultaat4);
if (typeof resultaat5 !== "undefined") results.push(resultaat5);

if (typeof isLangerDan != "undefined") {
  const isCorrect = isLangerDan("xx", "x") === true;
  const message = isCorrect
    ? "De functie isLangerDan werkt :)"
    : "De functie isLangerDan werkt niet :(";

  title.createElement(
    null,
    () => `<span class="${questionClass(isCorrect)}">${message}</span> <br>`,
  );
}

results.map((result, index) => {
  if (typeof result === "undefined") return;

  title.createElement(result, (t) => `Het antwoord van resultaat${index + 1} is = ${t}`);
});

title.render();
