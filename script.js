// ============================================
// DR. AYESHA MALIK — MEDICAL WEBSITE
// JavaScript by Avinza Studio
// ============================================


// ============================================
// 1. MOBILE NAVIGATION
// ============================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    function closeMenu() {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";
    }


    function openMenu() {
        navLinks.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        menuToggle.textContent = "✕";
    }


    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    // Close the mobile menu when a link is clicked

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });


    // Close the menu when the user presses Escape

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    // Close the mobile menu when switching to desktop layout

    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {
            closeMenu();
        }

    });

}


// ============================================
// 2. AUTOMATIC FOOTER YEAR
// ============================================

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// ============================================
// 3. NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    function updateNavbar() {

        if (window.scrollY > 20) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener("scroll", updateNavbar);

    // Set the initial state

    updateNavbar();

}


// ============================================
// 4. SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = this.getAttribute("href");

        // Ignore empty anchor links

        if (!targetID || targetID === "#") {
            return;
        }

        const targetElement = document.querySelector(targetID);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// ============================================
// 5. IMAGE LOADING FALLBACK
// ============================================

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "An image could not be loaded:",
            image.src
        );

        // Avoid repeatedly trying to load a broken image.

        image.style.backgroundColor = "#e8efe9";

    });

});


// ============================================
// 6. WELCOME MESSAGE
// ============================================

console.log(
    "Dr. Ayesha Malik website loaded successfully."
);

console.log(
    "Website concept designed by Avinza Studio."
);
// DEMO APPOINTMENT FORM
const appointmentForm = document.getElementById("appointment-form");
const formMessage = document.getElementById("form-message");

if (appointmentForm && formMessage) {
    // Prevent selecting a past date
    const dateInput = document.getElementById("appointment-date");

    if (dateInput) {
        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split("T")[0];

        dateInput.min = localToday;
    }

    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!appointmentForm.reportValidity()) {
            return;
        }

        formMessage.textContent =
            "Demo successful! This is a portfolio form. No appointment has been booked and no information has been sent.";

        formMessage.className = "success";

        appointmentForm.reset();
    });
}