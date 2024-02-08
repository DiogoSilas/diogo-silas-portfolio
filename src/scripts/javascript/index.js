const btnOpenMenu = document.getElementById('btn-open-menu');
const overlayMenu = document.getElementById('overlay-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const btnOpenModal = document.getElementById('btn-open-modal');

const toggleMenu = () => {
    menuMobile.classList.toggle('open-menu');
};

btnOpenMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);

btnOpenModal.addEventListener('click', ()=> {
    const modal = document.querySelector('.modal-window');
    const btnCloseModal = document.getElementsByClassName('btn-close-modal');
    modal.classList.add('open');

    modal.addEventListener('click', (e) => {
        if(e.target == btnCloseModal[0] || e.target.id == 'modal-window' ) {
            modal.classList.remove('open');
        };
    });
});