
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.style.setProperty("--r", (Math.random() * 20 - 10).toFixed(1));
  card.style.zIndex = Math.floor(Math.random() * 10) + 1;
  card.style.transform = `translate(-50%, -50%) rotate(${card.style.getPropertyValue("--r")}deg)`;
});

document.addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  cards.forEach((card, index) => {
    if (card.matches(":hover")) return;
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

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.zIndex = 9999;
    card.style.transform = "translate(-50%, -50%) scale(1.08)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.zIndex = Math.floor(Math.random() * 10) + 1;
  });
});

