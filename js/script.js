document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let fadeStart = 5;
    let fadeEnd = 300;

    let opacity = 1 - Math.min((scrollTop - fadeStart) / (fadeEnd - fadeStart), 1);
    opacity = Math.max(opacity, 0);

    let header = document.querySelector("h1");
    let paragraph1 = document.querySelector("h1 + p"); // Primer párrafo
    let paragraph2 = document.querySelector("h1 + p + p"); // Segundo párrafo

    if (header) header.style.opacity = opacity;
    if (paragraph1) paragraph1.style.opacity = opacity;
    
    if (paragraph2) paragraph2.style.opacity = 1 - opacity; // Inverso del primero
});
