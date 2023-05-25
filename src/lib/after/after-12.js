const { app, title } = init();

if (typeof leeftijd !== "undefined" && typeof leeftijdsgroep !== "undefined") {
  title.createElement(leeftijd, (title) => `De leeftijdsgroep van ${title} is: ${leeftijdsgroep}`);
}

title.render();
