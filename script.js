// Hotel Simoncini — Motion v0.2

const navbar = document.querySelector(".floating-nav");

function updateNavbar() {
  if (!navbar) return;

  if (window.scrollY > window.innerHeight * 0.9) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "power3.out",
    duration: 1.15
  });

  // Text reveal
  const revealItems = [
    ".silence-inner",
    ".story-text",
    ".art-intro",
    ".city-intro",
    ".destinations-heading",
    ".stay-copy",
    ".morning-copy",
    ".booking-inner",
    ".ending-inner"
  ];

  revealItems.forEach((selector) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 44,
        scrollTrigger: {
          trigger: el,
          start: "top 82%"
        }
      });
    });
  });

  // Image cinematic reveal
  const imageItems = [
    ".story-image img",
    ".art-image-main img",
    ".art-image-floating img",
    ".city-photo img",
    ".destination-grid img",
    ".stay-image img",
    ".morning-image img"
  ];

  gsap.utils.toArray(imageItems.join(",")).forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.08 },
      {
        scale: 1,
        duration: 2.4,
        scrollTrigger: {
          trigger: img,
          start: "top 88%"
        }
      }
    );
  });

  // Hero slow zoom
  gsap.fromTo(
    ".hero-image img",
    { scale: 1.08 },
    {
      scale: 1,
      duration: 3.2,
      scrollTrigger: {
        trigger: ".hero-reveal",
        start: "top 80%"
      }
    }
  );

  // Destination cards stagger
  gsap.from(".destination-grid article", {
    opacity: 0,
    y: 42,
    stagger: 0.12,
    duration: 1.05,
    scrollTrigger: {
      trigger: ".destination-grid",
      start: "top 82%"
    }
  });

  // Button hover
  document.querySelectorAll(".primary-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.04, duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.3 });
    });
  });
}
