const { app, title } = init();

const results = [
  typeof resultaat1 !== "undefined" && resultaat1,
  typeof resultaat2 !== "undefined" && resultaat2,
  typeof resultaat3 !== "undefined" && resultaat3,
  typeof resultaat4 !== "undefined" && resultaat4,
  typeof resultaat5 !== "undefined" && resultaat5,
];

const questionClass = (correct) => (correct ? "text-green-500" : "text-red-500");

const isCorrect = typeof isLangerDan !== "undefined" && isLangerDan("xx", "x") === true;

results.map((result, index) => {
  title.createElement(
    result,
    (title) =>
      `<span class="${questionClass(isCorrect)}">Antwoord van resultaat${
        index + 1
      } is</span> : ${title}`,
  );
});

title.render();
