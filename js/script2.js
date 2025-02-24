document.addEventListener("scroll", function () {
    // Obtén la altura de la ventana y la posición de desplazamiento
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;

    // Selección de todas las secciones
    let sections = document.querySelectorAll(".content");

    // Para cada sección, calculamos la opacidad en función de su posición
    sections.forEach(function (section) {
        let sectionTop = section.getBoundingClientRect().top + scrollTop; // Posición superior de la sección
        let sectionHeight = section.offsetHeight;

        // Calculamos la opacidad en función de la posición
        let opacity = 1 - (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight);
        opacity = Math.max(opacity, 0); // Aseguramos que la opacidad no sea menor que 0

        // Aplicamos la opacidad a la sección
        section.style.opacity = opacity;
    });
});
