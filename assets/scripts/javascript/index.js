const btnOpenMenu = document.getElementById('btn-open-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const overlayMenu = document.getElementById('overlay-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

const toggleMenu = () => {
    menuMobile.classList.toggle('open-menu');
};

btnOpenMenu.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);