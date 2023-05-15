const { app, title } = init();

title.createString(voornaam, (title) => `Hallo, ${title}, Welcome op deze workshop`);
title.createString(achternaam, (title) => `Je achternaam is ${title}`);
title.createNumber(leeftijd, (title) => `Je bent ${title} jaar oud`);
title.render();

// const title = document.createElement("h1");
// title.innerHTML = [
//   typeof voornaam !== "undefined"
//     ? `Hallo, <span class="text-red-500">${voornaam}</span>, Welcome op deze workshop`
//     : "",
//   typeof achternaam !== "undefined"
//     ? `Je achternaam is <span class="text-red-500">${achternaam}</span>`
//     : "",
//   typeof leeftijd !== "undefined"
//     ? `Je bent <span class="text-red-500">${leeftijd}</span> jaar oud`
//     : "",
// ].join("\n");
// app.appendChild(title);

// console.log("Dit is oefening 2");

// context.fillStyle = "#000";
// context.lineWidth = 5;
// context.strokeStyle = "#000";

// context.beginPath();

// const width = 300;
// const height = 300;
// const x = window.innerWidth / 2 - width / 2;
// const y = window.innerHeight / 2 - height / 2;

// context.moveTo(x, y);
// context.rect(x, y, width, height);
// context.fill();
