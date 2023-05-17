const { app, title } = init();

if (typeof mijnKwadraat !== "undefined") {
  title.createElement(mijnKwadraat, (title) => `Het kwadraat is ${title}`);
}
title.render();
