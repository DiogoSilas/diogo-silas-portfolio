const btnOpenMenu = document.getElementById('btn-open-menu');
const overlayMenu = document.getElementById('overlay-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

const toggleMenu = () => {
    menuMobile.classList.toggle('open-menu');
};

btnOpenMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);