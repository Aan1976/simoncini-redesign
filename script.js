const nav = document.querySelector(".floating-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.8) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});
