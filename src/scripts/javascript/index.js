const btnOpenMenu = document.getElementById('btn-open-menu');
const overlayMenu = document.getElementById('overlay-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

/**
 * Toggles the 'open-menu' class on the menuMobile element
 */
const toggleMenu = () => {
    if (menuMobile) {
        menuMobile.classList.toggle('open-menu');
    } else {
        console.error('menuMobile element not found');
    }
};

btnOpenMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);