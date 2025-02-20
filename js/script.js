document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let fadeStart = 5;
    let fadeEnd = 200;

    let opacity = 1 - Math.min((scrollTop - fadeStart) / (fadeEnd - fadeStart), 1);
    opacity = Math.max(opacity, 0);

    let header = document.querySelector("h1");
    let paragraph = document.querySelector("h1 + p");

    if (header) header.style.opacity = opacity;
    if (paragraph) paragraph.style.opacity = opacity;
});
