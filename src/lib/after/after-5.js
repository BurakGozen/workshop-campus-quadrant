const { app, title } = init();

const savedRandomNumber = localStorage.getItem("myRandomNumber");

if (typeof resultaat !== "undefined") {
  if (resultaat === parseInt(savedRandomNumber)) {
    title.createElement(`Goed gedaan!, Het getal was ${resultaat}`);
  } else if (resultaat < savedRandomNumber) {
    title.createElement(null, () => "Hoger");
  } else {
    title.createElement(null, () => "Lager");
  }
}

title.render();
