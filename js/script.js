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



/*document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let fadeStart = 50;  // El primer párrafo comienza a desvanecerse más temprano
    let fadeEnd = 200;   // El primer párrafo termina su desvanecimiento antes

    // Segundo párrafo empieza a aparecer más tarde
    let fadeStart2 = 100;  // Comienza a aparecer después del primer párrafo
    let fadeEnd2 = 400;    // Termina de aparecer más tarde

    // Calculamos la opacidad del primer párrafo
    let opacity = 1 - Math.min((scrollTop - fadeStart) / (fadeEnd - fadeStart), 1);
    opacity = Math.max(opacity, 0);

    // Calculamos la opacidad del segundo párrafo (aparece gradualmente)
    let opacity2 = Math.min((scrollTop - fadeStart2) / (fadeEnd2 - fadeStart2), 1);
    opacity2 = Math.max(opacity2, 0);

    // Selección de los elementos
    let header = document.querySelector("h1");
    let paragraph1 = document.querySelector("h1 + p");  // Primer párrafo
    let paragraph2 = document.querySelector("h1 + p + p");  // Segundo párrafo

    // Aplica las opacidades
    if (header) header.style.opacity = opacity;
    if (paragraph1) paragraph1.style.opacity = opacity;
    if (paragraph2) paragraph2.style.opacity = opacity2;
});
*/
