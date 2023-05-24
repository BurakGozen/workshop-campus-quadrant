const { app, title } = init();

if (typeof beoordeling !== "undefined") {
  title.createElement(beoordeling, (title) => `De beoordeling is ${title} `);
}

title.render();
