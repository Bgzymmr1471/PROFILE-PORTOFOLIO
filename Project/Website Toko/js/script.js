// =============================== //
// Toggle Menu Navbar
// =============================== //

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle class 'active' ketika hamburger menu diklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// =============================== //
// Klik di luar sidebar untuk menutup menu
// =============================== //

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
