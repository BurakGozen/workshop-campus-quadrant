const { app, title } = init();

if (typeof som !== "undefined") {
  title.createElement(som, (title) => `De som is ${title}`);
}

if (typeof verschil !== "undefined") {
  title.createElement(verschil, (title) => `Het verschil is ${title}`);
}

if (typeof product !== "undefined") {
  title.createElement(product, (title) => `Het product is ${title}`);
}

if (typeof quotient !== "undefined") {
  title.createElement(quotient, (title) => `Het quotient is ${title}`);
}

title.render();
