const navMenu = document.querySelector('.nav-menu-icon');
const mobileNavigation = document.querySelector('.mobile-nav');

function toggleNavigationVisibility() {
    const expanded = navMenu.getAttribute('aria-expanded') === "true" || false;
    navMenu.setAttribute('aria-expanded', !expanded);
    mobileNavigation.setAttribute('aria-expanded', !expanded);
}

const menuIcon = document.querySelector('.icon.menu');
console.log(menuIcon);
menuIcon.addEventListener('click', toggleNavigationVisibility);

