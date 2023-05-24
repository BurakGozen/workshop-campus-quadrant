const { app, title } = init();

if (typeof nummer !== "undefined") {
  title.createElement(nummer, (title) => `${title} is een ${isPositief ? "positief" : "negatief"}`);
}

title.render();
