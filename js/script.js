document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY; // Get the scroll position
  let fadeStart = 50; // Start fading after 50px of scrolling
  let fadeEnd = 300; // Fully disappear at 300px

  let opacity = 1 - Math.min((scrollTop - fadeStart) / (fadeEnd - fadeStart), 1);
  opacity = Math.max(opacity, 0); // Ensure it never goes below 0

  let header = document.querySelector("h1");
  header.style.opacity = opacity;
});
