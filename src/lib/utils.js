function init() {
  const app = createWorkingArea();
  const title = new TitleElement(app);

  return { app, title };
}

function createWorkingArea() {
  const app = document.getElementById("app");

  if (app) {
    const { style } = app;
    style.display = "grid";
    style.placeItems = "center";
    style.height = "100vh";
  }

  return app;
}

class TitleElement {
  title = document.createElement("h1");
  innerHTML = "";

  constructor(app) {
    this.app = app;
  }

  #checkIfValueIsUndefined(value) {
    return typeof value !== "undefined";
  }

  #createTitleElement(value, className, callback) {
    const valid = this.#checkIfValueIsUndefined(value);
    let text = valid ? `<span class="${className}">${value}</span>` : "";
    if (callback) text = callback(text);
    this.innerHTML += text + "\n";
  }

  createString(value, callback) {
    this.#createTitleElement(value, "text-green-500", callback);
  }

  createNumber(value, callback) {
    this.#createTitleElement(value, "text-orange-500", callback);
  }

  createBoolean(value, callback) {
    this.#createTitleElement(value, "text-blue-500", callback);
  }

  render() {
    this.title.innerHTML = this.innerHTML;
    this.title.classList.add("text-3xl");
    app.appendChild(this.title);
  }
}
