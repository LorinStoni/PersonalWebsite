/*
    responsible menu
*/
const navMenu = document.querySelector('.nav-menu-icon');
const mobileNavigation = document.querySelector('.mobile-nav');

function toggleNavigationVisibility() {
    const expanded = navMenu.getAttribute('aria-expanded') === "true";
    navMenu.setAttribute('aria-expanded', !expanded);
    mobileNavigation.setAttribute('aria-expanded', !expanded);
}

const menuIcon = document.querySelector('.icon.menu');
console.log(menuIcon);
menuIcon.addEventListener('click', toggleNavigationVisibility);

/*
    contact form
*/
const buttonContactForm = document.getElementById('button-contact-form');
const contactForm = document.getElementById('contact-form');
buttonContactForm.addEventListener('click', function (e) {
    var expanded = contactForm.getAttribute('aria-expanded') === "true";
    contactForm.setAttribute('aria-expanded', !expanded);
});

