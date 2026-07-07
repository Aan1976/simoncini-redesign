// =====================================================
// Hotel Simoncini
// AnDevLab
// Motion v0.1
// =====================================================

const navbar = document.querySelector(".floating-nav");

function updateNavbar() {
  if (!navbar) return;

  const trigger = window.innerHeight * 0.9;

  if (window.scrollY > trigger) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);


// GSAP Motion
gsap.registerPlugin(ScrollTrigger);

// Global reveal animation
gsap.utils.toArray(".tiny-label, .story-text span, .art-intro span, .city-intro span, .destinations-heading span, .stay-copy span, .morning-copy span").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});

gsap.utils.toArray("h2, blockquote").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 46,
    duration: 1.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 82%",
    }
  });
});

gsap.utils.toArray("p").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 28,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
    }
  });
});

// Slow image reveal
gsap.utils.toArray(".story-image img, .art-image-main img, .art-image-floating img, .city-photo img, .destination-grid img, .stay-image img, .morning-image img").forEach((img) => {
  gsap.fromTo(img,
    {
      scale: 1.08,
      opacity: 0.92
    },
    {
      scale: 1,
      opacity: 1,
      duration: 2.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
      }
    }
  );
});

// Hero slow cinematic zoom
gsap.fromTo(".hero-image img",
  {
    scale: 1.08
  },
  {
    scale: 1,
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-reveal",
      start: "top 80%",
    }
  }
);

// Living Gallery layered reveal
gsap.from(".art-image-main", {
  opacity: 0,
  y: 60,
  duration: 1.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".art-stage",
    start: "top 78%",
  }
});

gsap.from(".art-image-floating", {
  opacity: 0,
  y: 80,
  duration: 1.4,
  delay: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".art-stage",
    start: "top 78%",
  }
});

gsap.from(".art-note", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  delay: 0.25,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".art-stage",
    start: "top 78%",
  }
});

// Destination cards stagger
gsap.from(".destination-grid article", {
  opacity: 0,
  y: 50,
  duration: 1.1,
  stagger: 0.12,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".destination-grid",
    start: "top 82%",
  }
});

// Button hover polish
const buttons = document.querySelectorAll(".primary-button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.04,
      duration: 0.35,
      ease: "power3.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.35,
      ease: "power3.out"
    });
  });
});
