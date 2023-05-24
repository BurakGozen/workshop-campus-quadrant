const { app, title } = init();

if (typeof test !== "undefined") {
  title.createElement(test, (title) => `${title} `);
}

title.render();
