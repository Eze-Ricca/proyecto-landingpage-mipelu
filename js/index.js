// menu hamburguesa
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

var container__menu = document.querySelector(".menu");
function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

  container__menu.classList.toggle("menu__active");
}
// activando menu hamburguesa
const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");

menu.addEventListener("click", function () {
  menuList.classList.toggle("nav__list--show");
});
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menuList.classList.remove("nav__list--show");
  });
});
