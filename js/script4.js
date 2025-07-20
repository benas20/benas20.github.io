<script>
  const videoPairs = document.querySelectorAll('.video-pair');

  videoPairs.forEach(pair => {
    const thumb = pair.querySelector('.video-thumb');
    const video = pair.querySelector('.fullscreen-video');

    // Asegúrate de que el video esté oculto al principio
    video.style.display = "none";

    thumb.addEventListener('click', () => {
      video.style.display = "block";

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }

      video.play();
    });

    // Cuando se cierra pantalla completa, ocultar el video
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none";
      }
    });
  });
</script>
