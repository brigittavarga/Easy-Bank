const burger = document.querySelector(".burger");
const toggleClose = document.querySelector(".toggle-close");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".mobile-nav li");
const burgerIcon = getElementById("burger");

const inviteBtn = document.querySelectorAll(".invite-btn");
const modalBg = document.querySelector(".modal-bg");

 // Toggle menu function
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

 // Get invite modal on request-btn click
 inviteBtn.addEventListener("click", function() {
    modalBg.classList.add("modal-active");
 });