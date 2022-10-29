let screenWidth = screen.width;
let screenHeight = screen.height;

if(screenHeight <= 700){
  document.getElementById("Home-Page").style.height = screenHeight + 'px';
  let homePage = document.querySelector("#Home-Page");
  let textOnHome = document.getElementById("Text-On-Home");

  homePage.style.display = 'block';
  textOnHome.style.position = 'relative';
  textOnHome.style.top = (screenHeight / 2) - 74.375 + 'px';

  document.getElementById("Home-Page").style.height = screenHeight;
}
