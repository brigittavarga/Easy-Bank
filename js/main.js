const burger = document.querySelector(".burger");
const toggleClose = document.querySelector(".toggle-close");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".mobile-nav li");
const burgerIcon = getElementById("burger");

function toggleFunction() {
    var element = document.getElementById("burger");
    element.classList.toggle("nav-active");
    
    navLinks.forEach((link, index) => {

        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
 }

 toggleFunction();