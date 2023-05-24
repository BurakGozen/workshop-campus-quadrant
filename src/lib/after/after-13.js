const { app, title } = init();

if (typeof kost !== "undefined") {
  title.createElement(kost, (title) => `Je verzendkosten bedraagt ${kost / 0 ? "€" : ""}${title} `);
}

title.render();
