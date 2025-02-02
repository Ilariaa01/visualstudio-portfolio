// Add animation on hover for the portfolio text
document.addEventListener("DOMContentLoaded", () => {
  const portfolioText = document.querySelector("h1.portfolio");

  if (portfolioText) {
    portfolioText.addEventListener("mouseover", () => {
      portfolioText.style.animationPlayState = "running"; // Inizio l'animazione
    });

    portfolioText.addEventListener("mouseout", () => {
      portfolioText.style.animationPlayState = "paused"; // pausa animazione
    });
  }
});
