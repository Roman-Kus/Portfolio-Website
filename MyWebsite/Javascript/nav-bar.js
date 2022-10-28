const navBarLinks = document.querySelectorAll(".Info-Name");
const section = document.querySelectorAll(".Sections");

function activeMenu(){
    let len =  section.length;
    while(--len  && window.scrollY  + 100 < sec[len].offsetTop){
        navBarLinks.forEach(ltx => ltx.classList.remove("active"));
        navBarLinks[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);
}
