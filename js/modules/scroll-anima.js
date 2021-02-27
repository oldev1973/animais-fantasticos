// scroll quando a section começa a aparecer na tela

import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // verifica a distancia de cada section em relção ao topo
  getDistance() {
    this.distances = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  // verifica a distancia de cada section em relção ao scroll
  checkDistance() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
