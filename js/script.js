document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let fadeStart = 50;  // El primer párrafo comienza a desvanecerse más temprano
    let fadeEnd = 200;   // El primer párrafo termina su desvanecimiento antes

    // Segundo párrafo empieza más tarde
    let fadeStart2 = 100;  // Comienza a desvanecerse después del primer párrafo
    let fadeEnd2 = 400;    // Termina el desvanecimiento más tarde

    // Calculamos la opacidad del primer párrafo
    let opacity = 1 - Math.min((scrollTop - fadeStart) / (fadeEnd - fadeStart), 1);
    opacity = Math.max(opacity, 0);

    // Calculamos la opacidad del segundo párrafo
    let opacity2 = 1 - Math.min((scrollTop - fadeStart2) / (fadeEnd2 - fadeStart2), 1);
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
