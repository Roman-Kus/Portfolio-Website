const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let navLength = document.querySelector("nav").clientWidth / 2;
const letName = document.getElementById("Name");
const navLinks = document.querySelectorAll('.nav-link')

letName.style.marginLeft = 25 + 'px';
let check = 0;

hamburger.addEventListener("click", () => {
  ++check;
  hamburger.classList.toggle("active");
  navMenu.style.left = "0px";
  navMenu.style.transition = "0.5s ease-in-out";
  letName.style.marginLeft = (navLength - 79) + 'px';
  letName.style.transition = "0.5s ease-in-out";

  if(check === 2){
    letName.style.marginLeft = 25 + 'px';
    navMenu.style.left = "-100%";
    navMenu.style.transition = "0.5s ease-in-out";
    check = 0;
  }
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.style.left = "-100%";
  navMenu.style.transition = "1s ease-in-out";
  letName.style.marginLeft = 25 + 'px';
}));

