const { app, title } = init();

const weights = [1, 2, 5, 6, 8, 10, 15, 30, 50];

if (typeof berekenVerzendkosten !== "undefined") {
  weights.forEach((weight) => {
    title.createElement(
      berekenVerzendkosten(weight),
      (title) => `De verzendkosten voor het gewicht van ${weight}kg bedraagt € ${title} `,
    );
  });
}

title.render();
