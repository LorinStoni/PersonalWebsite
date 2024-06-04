const buttonContactForm = document.getElementById('button-contact-form');
const contactForm = document.getElementById('contact-form');
buttonContactForm.addEventListener('click', function (e) {
    const expanded = contactForm.getAttribute('aria-expanded') === "true";
    contactForm.setAttribute('aria-expanded', !expanded);
});
