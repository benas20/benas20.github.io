<script>
  document.querySelectorAll('.media-thumb').forEach(item => {
    item.addEventListener('click', () => {
      if (item.tagName === 'VIDEO') {
        // Solicita pantalla completa
        if (item.requestFullscreen) {
          item.requestFullscreen();
        } else if (item.webkitRequestFullscreen) {
          item.webkitRequestFullscreen();
        } else if (item.msRequestFullscreen) {
          item.msRequestFullscreen();
        }

        item.play(); // Reproduce el video al abrir
      }
    });
  });
</script>
