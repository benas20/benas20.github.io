// Seleccionamos la imagen que debe desaparecer
const slideTriggerImage = document.querySelector('.slide-trigger-image');
const content = document.querySelector('.content');

// Activamos la desaparición de la imagen al pasar el ratón
content.addEventListener('mouseenter', () => {
  slideTriggerImage.style.opacity = 0; // Hacemos que la imagen desaparezca
});

// Restauramos la imagen cuando el ratón deja de estar encima
content.addEventListener('mouseleave', () => {
  slideTriggerImage.style.opacity = 1; // Restauramos la visibilidad
});
