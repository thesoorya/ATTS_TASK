const navbar = document.querySelector('.navbar');
const navButton = document.querySelector('.nav_button');
const navbarHamLines = document.querySelectorAll('.ham_line');
const navbarHam = document.querySelector('.navbar_ham_lines');
const navItems = document.querySelector('.nav_items');
const navClose = document.querySelector('.nav_close');

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        navbar.classList.add('navbar_active');
        navButton.style.borderBottom = '1px solid #000';
        navbarHamLines.forEach(hamLine => {
            hamLine.style.backgroundColor = '#000';
        });
    } else {
        navbar.classList.remove('navbar_active');
        navButton.style = ''; // Reset inline styles
        navbarHamLines.forEach(hamLine => {
            hamLine.style.backgroundColor = '#fbfbfb';
        });
    }
});

navbarHam.addEventListener('click', () => {
    navItems.classList.add('nav_items_active');
});

navClose.addEventListener('click', () => {
    navItems.classList.remove('nav_items_active');
});
