const navMenu = document.querySelector('.nav__icons_menu');
const closeIcon = document.querySelector('.navbar__close');
const hamburguerIcon = document.querySelector('.navbar__hamburguer');
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelectorAll('.dropdown-container');

navMenu.addEventListener('click', () => {
    closeIcon.classList.toggle('change');
    hamburguerIcon.classList.toggle('change');
    navbar.classList.toggle('change');
});

dropdown.forEach(element => {
    element.addEventListener('click', () => {
            removeChange();
            element.children[1].classList.toggle('change');
            element.nextSibling.nextSibling.classList.toggle('change');
        })
        // classList.toggle('change');
});

function removeChange() {
    dropdown.forEach((element, idx) => {
        console.log(element.nextElementSibling.classList.remove('change'));
    });
}