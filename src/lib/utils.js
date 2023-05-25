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

const questionClass = (correct) => (correct ? "text-green-500" : "text-red-500");

function createContext(app) {
  app.innerHTML = `<canvas id="canvas"></canvas>`;

  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.margin = 0;
  canvas.style.padding = 0;
  canvas.style.backgroundColor = "#d8d8d8";
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  return canvas.getContext("2d");
}

class TitleElement {
  title = document.createElement("h1");
  innerHTML = "";

  constructor(app) {
    this.app = app;
  }

  createElement(value, callback) {
    const valueType = typeof value;

    switch (valueType) {
      case "string":
        this.#createString(value, callback);
        break;
      case "number":
        this.#createNumber(value, callback);
        break;
      case "boolean":
        this.#createBoolean(value, callback);
        break;
      default:
        this.#createTitleElement("", "", callback);
        break;
    }
  }

  #createTitleElement(value, className, callback) {
    let text = `<span class="${className}">${value}</span>`;
    if (callback) text = callback(text);
    this.innerHTML += text + "\n";
  }

  #createString(value, callback) {
    this.#createTitleElement(value, "text-green-500", callback);
  }

  #createNumber(value, callback) {
    this.#createTitleElement(value, "text-orange-500", callback);
  }

  #createBoolean(value, callback) {
    this.#createTitleElement(value, "text-blue-500", callback);
  }

  render() {
    this.title.innerHTML = this.innerHTML;
    this.title.classList.add("text-3xl");
    app.appendChild(this.title);
  }
}
