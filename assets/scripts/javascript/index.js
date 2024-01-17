const btnOpenMenu = document.getElementById('btn-open-menu');
console.log(btnOpenMenu);
const menuMobile = document.getElementById('menu-mobile');
console.log('menu-mobile')
const btnCloseMenu = document.getElementById('btn-close-menu')

btnOpenMenu.addEventListener('click', () => {
    menuMobile.classList.add('open-menu')
})
btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu')
})