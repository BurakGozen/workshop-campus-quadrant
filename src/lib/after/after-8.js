const { app, title } = init();

const toevoegenParams = [2, 1];
const aftrekkenParams = [5, 2];
const vermenigvuldigenParams = [3, 4];
const delenParams = [12, 4];

const questionClass = (correct) => (correct ? "text-green-500" : "text-red-500");

if (typeof toevoegen !== "undefined") {
  const correctAnswer = toevoegenParams[0] + toevoegenParams[1];
  const isCorrect = toevoegen(...toevoegenParams) === correctAnswer;

  title.createElement(
    toevoegen(...toevoegenParams),
    (title) =>
      `<span class="${questionClass(isCorrect)}">${toevoegenParams[0]} + ${
        toevoegenParams[1]
      }</span> = ${title}`,
  );
}

if (typeof aftrekken !== "undefined") {
  const correctAnswer = aftrekkenParams[0] - aftrekkenParams[1];
  const isCorrect = aftrekken(...aftrekkenParams) === correctAnswer;

  title.createElement(
    aftrekken(...aftrekkenParams),
    (title) =>
      `<span class="${questionClass(isCorrect)}">${aftrekkenParams[0]} - ${
        aftrekkenParams[1]
      }</span> = ${title}`,
  );
}

if (typeof vermenigvuldigen !== "undefined") {
  const correctAnswer = vermenigvuldigenParams[0] * vermenigvuldigenParams[1];
  const isCorrect = vermenigvuldigen(...vermenigvuldigenParams) === correctAnswer;

  title.createElement(
    vermenigvuldigen(...vermenigvuldigenParams),
    (title) =>
      `<span class="${questionClass(isCorrect)}">${vermenigvuldigenParams[0]} * ${
        vermenigvuldigenParams[1]
      }</span> = ${title}`,
  );
}

if (typeof delen !== "undefined") {
  const correctAnswer = delenParams[0] / delenParams[1];
  const isCorrect = delen(...delenParams) === correctAnswer;

  title.createElement(
    delen(...delenParams),
    (title) =>
      `<span class="${questionClass(isCorrect)}">${delenParams[0]} / ${
        delenParams[1]
      }</span> = ${title}`,
  );
}

title.render();
