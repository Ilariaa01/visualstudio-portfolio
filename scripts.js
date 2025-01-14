// Aggiungere event listener per i bottoni
window.onload = function () {
  // Riferimento ai bottoni
  const graphicDesignButton = document.getElementById("graphic-design-button");
  const profileButton = document.getElementById("profile-button");

  // Aggiungere eventi di clic ai bottoni
  graphicDesignButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita l'azione di default, in questo caso il link che non porta da nessuna parte
    alert("Hai cliccato su Graphic Design!");
  });
};

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
