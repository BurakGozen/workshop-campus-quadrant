const { app, title } = init();

if (typeof leeftijd !== "undefined") {
  title.createElement(leeftijd, (title) => `De leeftijdsgroep van ${title} is: ${leeftijdsgroep}`);
}

title.render();
