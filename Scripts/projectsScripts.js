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
      markers: false, // Removed markers for production
    },
    onComplete: () => {
      menuOpen = true;
    },
  });

  works.forEach((work, index) => {
    work.style.zIndex = works.length - index;
    gsap.set(work, {
      scale: 1 - 0.02 * (index + 1),
      y: `-${(works.length - index) * 30}px`,
      backgroundImage: `url(../Contents/projectCard${index + 1}.png)`,
    });
  });

  sections.forEach((section, index) => {
    tl.to(section, { duration: 1, y: `-=${viewHeight}` });
    if (index === 2) {
      works.forEach((work, index) => {
        const rotations = [-5, 5];
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

document.addEventListener("DOMContentLoaded", function () {
  const titleText = document.querySelector(".title-text");

  // Attiva l'animazione quando la pagina viene caricata
  titleText.style.animationPlayState = "running";

  // Attiva l'animazione al passaggio del mouse
  titleText.addEventListener("mouseenter", function () {
    titleText.style.animationPlayState = "running";
  });

  // Ferma l'animazione quando il mouse esce
  titleText.addEventListener("mouseleave", function () {
    titleText.style.animationPlayState = "paused";
  });
});
