<script>
  const pairs = document.querySelectorAll('.video-pair');

  pairs.forEach(pair => {
    const thumb = pair.querySelector('.video-thumb');
    const video = pair.querySelector('.fullscreen-video');

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

    // Ocultar y resetear video al salir de pantalla completa
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none";
      }
    });
  });
</script>
