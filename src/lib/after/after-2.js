const { app, title } = init();

if (typeof voornaam !== "undefined")
  title.createElement(voornaam, (title) => `Hallo, ik ben ${title}.`);

if (typeof achternaam !== "undefined")
  title.createElement(achternaam, (title) => `Mijn achternaam is ${title}.`);

if (typeof leeftijd !== "undefined")
  title.createElement(leeftijd, (title) => `Ik ben ${title} jaar oud`);

title.render();
