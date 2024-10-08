// Hamburger menu selections
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// scroll-to-top selection
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// Hamburger menu functionality

// Theme switcher selection

// Close menu on nav menu clicks

// scroll to top functionality

// Theme switcher functionality
