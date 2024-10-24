document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.res-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

