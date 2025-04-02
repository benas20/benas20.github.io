// Crear estrellas aleatorias
document.addEventListener("DOMContentLoaded", function() {
  const starContainer = document.createElement('div');
  starContainer.classList.add('stars');
  document.querySelector('.section2').appendChild(starContainer);

  for (let i = 0; i < 100; i++) { // 100 estrellas
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 'px'; // Tamaño aleatorio de estrellas
    const top = Math.random() * 100 + '%'; // Posición aleatoria vertical
    const left = Math.random() * 100 + '%'; // Posición aleatoria horizontal
    const delay = Math.random() * 5 + 's'; // Retardo aleatorio para el parpadeo

    star.style.width = size;
    star.style.height = size;
    star.style.top = top;
    star.style.left = left;
    star.style.animationDuration = delay;

    starContainer.appendChild(star);
  }
});
