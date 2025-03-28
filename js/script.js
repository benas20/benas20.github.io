document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let sections = document.querySelectorAll(".content");

  // Solo comenzar a aplicar el desvanecimiento después de 900px de desplazamiento
  if (scrollTop < 900) {
    return; // No hacer nada si el desplazamiento es menor que 900px
  }

  sections.forEach(function (section, index) {
    // Si es la última sección, no aplicamos el desvanecimiento
    if (index === sections.length - 1) {
      return; // Salir de la función para no aplicar opacidad
    }

    let sectionTop = section.getBoundingClientRect().top + scrollTop;
    let sectionHeight = section.offsetHeight;

    // Calcular la opacidad dependiendo de la dirección del scroll
    let opacity;
    if (scrollTop > sectionTop) {
      opacity = (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight);
    } else {
      // Aumentar la opacidad más rápido cuando se hace scroll hacia arriba
      opacity = 1 - (sectionTop - scrollTop) / (sectionHeight + windowHeight / 2); // Reduce el denominador
    }

    opacity = Math.max(opacity, 0); // Asegura que la opacidad no sea negativa

    section.style.opacity = opacity;
  });
});




/* document.addEventListener("scroll", function () {
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

    // Calcular la opacidad dependiendo de la dirección del scroll
    let opacity;
    if (scrollTop > sectionTop) {
      opacity = (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight);
    } else {
      // Aumentar la opacidad más rápido cuando se hace scroll hacia arriba
      opacity = 1 - (sectionTop - scrollTop) / (sectionHeight + windowHeight / 4); // Reduce el denominador
    }

    opacity = Math.max(opacity, 0); // Asegura que la opacidad no sea negativa

    section.style.opacity = opacity;
  });
});
*/



