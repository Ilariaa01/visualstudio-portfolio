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

let menuOpen = false;

document.addEventListener("DOMContentLoaded", () => {
  const viewHeight = window.innerHeight;
  const sections = document.querySelectorAll("body > section");
  const works = document.querySelectorAll("#works .work");

  // setting timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      pin: true,
      scrub: 1,
      markers: true,
    },
    onComplete: () => {
      menuOpen = true;
      console.log("tl complete");
    },
  });

  works.forEach((work, index) => {
    work.style.zIndex = works.length - index;
    gsap.set(work, {
      scale: 1 - 0.02 * (index + 1),
      y: `-${(works.length - index) * 30}px`,
    });
    console.log(`setting z-index to ${works.length - index}`);
  });

  sections.forEach((section, index) => {
    tl.to(section, { duration: 1, y: `-=${viewHeight}` });
    if (index == 2) {
      works.forEach((work, index) => {
        const rotations = [-5, 5];
        //gsap.to(works, 0.2, {scale: `+=0.3`, stagger: 0.1});
        tl.to(work, {
          duration: 0.5,
          scale: 1.1,
          rotation: rotations[Math.floor(Math.random() * rotations.length)],
        });
        tl.to(work, { duration: 1, y: `-=${600}`, opacity: 0 });
      });
    }
  });
});
