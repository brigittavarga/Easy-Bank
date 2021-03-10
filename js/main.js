const burger = document.querySelector(".burger");
const toggleClose = document.querySelector(".toggle-close");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".mobile-nav li");
const burgerIcon = getElementById("burger");

 // Toggle menu function
function toggleFunction() {
    // var element = document.getElementById("burger");
    burger.classList.toggle("nav-active");
    
    navLinks.forEach((link, index) => {

        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
 }

 toggleFunction();

 // Get invite modal on invite-btn click
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector("modal-close");
const inviteBtn = document.querySelectorAll(".invite-btn");

function modalFunction(e) {
    modalBg.classList.add("modal-active");
}

inviteBtn.forEach(btn => btn.addEventListener("click", modalFunction))

modalClose.addEventListener("click", function() {
     modalBg.classList.remove("modal-active");
});

