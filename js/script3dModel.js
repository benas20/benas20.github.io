<script>
const cards = document.querySelectorAll(".card");

// Rotación aleatoria inicial
cards.forEach(card => {
  card.style.setProperty(
    "--r",
    (Math.random() * 20 - 10).toFixed(1)
  );
});

document.addEventListener("mousemove", e => {

  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  cards.forEach((card, index) => {

    const strength = (index + 1) * 8;

    card.style.transform = `
      translate(
        calc(-50% + ${x * strength}px),
        calc(-50% + ${y * strength}px)
      )
      rotate(${card.style.getPropertyValue("--r")}deg)
    `;
  });

});
</script>
