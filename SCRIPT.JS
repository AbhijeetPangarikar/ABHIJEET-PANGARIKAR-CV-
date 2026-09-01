/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navigation) {
            navigation.classList.remove("open");
        }

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   PAGE TRANSITION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});