const { app, title } = init();

if (typeof derdeMacht !== "undefined") {
  const value = derdeMacht(3);
  const isCorrect = value === 27;
  title.createElement(
    value,
    (title) => `<span class="${questionClass(isCorrect)}">De derde macht van 3</span> = ${title}`,
  );
}
title.render();
