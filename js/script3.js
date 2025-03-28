// Seleccionamos las imágenes que deben desaparecer y el contenedor slide
const content = document.querySelectorAll('.content');
content.forEach(item => {
  const slideTriggerImage = item.querySelector('.slide-trigger-image');
  const slideContainer = item.querySelector('.slide-container');
  
  // Activamos la desaparición de la imagen al pasar el ratón
  item.addEventListener('mouseenter', () => {
    slideTriggerImage.style.opacity = 0; // Hacemos que la imagen desaparezca
  });
  
  // Restauramos la imagen cuando el ratón deja de estar encima
  item.addEventListener('mouseleave', () => {
    slideTriggerImage.style.opacity = 1; // Restauramos la visibilidad
  });
});
