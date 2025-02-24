document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let sections = document.querySelectorAll(".content");

  sections.forEach(function (section, index) {
    // Si es la última sección, no aplicamos el desvanecimiento
    if (index === sections.length - 1) {
      return; // Salir de la función para no aplicar opacidad
    }

    let sectionTop = section.getBoundingClientRect().top + scrollTop;
    let sectionHeight = section.offsetHeight;

    let opacity = 1 - (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight);
    opacity = Math.max(opacity, 0);

    section.style.opacity = opacity;
  });
});
