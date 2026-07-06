// =====================================================
// Hotel Simoncini
// AnDevLab
// Version 0.1
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

window.addEventListener("load", () => {
  updateNavbar();
});
