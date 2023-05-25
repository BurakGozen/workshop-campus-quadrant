const { app, title } = init();

const results = [
  [85, 92, 88],
  [40, 50, 65],
  [100, 100, 100],
  [50, 50, 50],
  [60, 70, 80],
];

if (typeof beoordeelStudent !== "undefined") {
  const result = beoordeelStudent(...results[0]);
  console.log(result);

  results.forEach((result) => {
    const beoordeling = beoordeelStudent(...result);
    title.createElement(
      beoordeling,
      (title) => `De beoordeling voor een student met resultaten ${result.join(", ")} = ${title} `,
    );
  });
}

title.render();
