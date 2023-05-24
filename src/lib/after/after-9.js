const { app, title } = init();

render();

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "w":
      if (typeof y != "undefined" && typeof vooruit != "undefined" && y > 0) vooruit();
      break;
    case "s":
      if (typeof y != "undefined" && typeof achteruit != "undefined" && y < 8) achteruit();
      break;
    case "a":
      if (typeof x != "undefined" && typeof links != "undefined" && x > 0) links();
      break;
    case "d":
      if (typeof x != "undefined" && typeof rechts != "undefined" && x < 8) rechts();
      break;
  }

  render();
});

function render() {
  const items = Array(81).fill(`<div class="frog-item">&nbsp;</div>`);

  if (typeof x != "undefined" && typeof y != "undefined") {
    const coordinate = x + 9 * y;
    if (coordinate >= 0 && coordinate < 81) {
      items[coordinate] = `<div class="frog-item frog">&nbsp;</div>`;
    }
  }

  app.classList.add("frog-container");
  app.innerHTML = items.join("");
}
