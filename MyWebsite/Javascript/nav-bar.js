const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let navLength = document.querySelector("nav").clientWidth / 2;
const letName = document.getElementById("Name");
const navLinks = document.querySelectorAll('.nav-menu li')

letName.style.marginLeft = 25 + 'px';
let check = 0;

hamburger.addEventListener("click", () => {
  ++check;
  hamburger.classList.toggle("active");
  navMenu.style.left = "0px";
  navMenu.style.transition = "0.5s ease-in-out";
  letName.style.marginLeft = (navLength - 52) + 'px';
  letName.style.transition = "0.5s ease-in-out";

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});
