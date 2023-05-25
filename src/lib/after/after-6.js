const { app, title } = init();

if (typeof mijnKwadraat !== "undefined") {
  title.createElement(mijnKwadraat, (title) => `Het kwadraat van je getal is ${title}`);
}

title.render();
