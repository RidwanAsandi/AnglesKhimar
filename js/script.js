// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamberger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// ketika shopping di klik mucul
const shopping = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shopping.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

//tambahan search supaya tulisan bisa langsung dan bisa click icon dimana saja
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Klik Di luar elemen untuk mengilangkan hamburger dan search
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sh = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sh.contains(e.target) && !shopping.contains(e.target)) {
    shopping.classList.remove("active");
  }
});
