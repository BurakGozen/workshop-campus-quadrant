const { app, title } = init();

if (typeof korting !== "undefined") {
  title.createElement(korting, (title) => `De toegepaste korting is: €${title}`);
}

title.render();
