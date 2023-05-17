const { app, title } = init();

const savedRandomNumber = localStorage.getItem("myRandomNumber");

if (resultaat === parseInt(savedRandomNumber)) {
  title.createElement(`Goed gedaan ! Het getal was ${resultaat}`);
} else if (resultaat < savedRandomNumber) {
  title.createElement(`Hoger`);
} else {
  title.createElement(`Lager `);
}

console.log(resultaat);

title.render();
