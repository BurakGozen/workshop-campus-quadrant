const { app, title } = init();

// if (optellen(5) === 15) title.createElement("Goed gedaan !");
if (typeof mijnKwadraat !== "undefined") {
  //   title.createElement(Math.sqrt(mijnKwadraat), (title) => `Het kwadraat van ${title}`);
  title.createElement(mijnKwadraat, (title) => `Het kwadraat is ${title}`);
}

title.render();
