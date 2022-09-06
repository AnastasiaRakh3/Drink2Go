const nav = document.querySelector(".page-header__nav");
const navToggle = document.querySelector(".page-header__nav-toggle");

nav.classList.remove("page-header__nav--nojs");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("page-header__nav--opened");
});
