window.scrollReveal =  ScrollReveal({ reset: true });

const textHome = {
    duration: 2500,
    distance: '60%',
    origin: 'left'
};
const imgHome = {
    duration: 2500,
    distance: '60%',
    origin: 'right'
};

scrollReveal.reveal('.txt-home', textHome)
scrollReveal.reveal('.img-home', imgHome)