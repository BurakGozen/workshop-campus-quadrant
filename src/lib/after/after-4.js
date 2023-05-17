const { app, title } = init();

const correctAnswers = [true, true, false, true, false];
const questions = [
  "De Grote Muur van China is de langste muur ter wereld.",
  "Rome is de hoofdstad van Italië.",
  "De Eiffeltoren staat in Londen.",
  "Water kookt bij een temperatuur van 100 graden Celsius.",
  "De aarde draait rond de maan.",
];

const answersIsValid = typeof antwoorden !== "undefined";

questions.forEach((question, index) => {
  const isCorrect = answersIsValid && correctAnswers[index] === antwoorden[index];
  const questionClass = isCorrect ? "text-green-500" : answersIsValid ? "text-red-500" : "";

  title.createElement(
    answersIsValid ? antwoorden[index] : "",
    (title) =>
      `<span class="${questionClass}">${index + 1}. ${question}</span>&nbsp; → &nbsp;${title}`,
  );
});

title.render();
