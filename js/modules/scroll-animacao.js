// scroll quando a section começa a aparecer na tela

export default function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.5;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
