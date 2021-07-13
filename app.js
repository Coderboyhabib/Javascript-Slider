const caruselSlide = document.querySelector('.carusel-slide');
const caurselImages = document.querySelectorAll('.carusel-slide img');


//Button

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = caurselImages[0].clientWidth;
caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//ButtonLisaner

nextBtn.addEventListener('click', () => {
    if (counter >= caurselImages.length - 1) return;
    caruselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caruselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


caruselSlide.addEventListener('transitionend', () => {
    if (caurselImages[counter].id === 'lastClone') {
        caruselSlide.style.transition = 'none';
        counter = caurselImages.length - 2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (caurselImages[counter].id === 'fastClone') {
        caruselSlide.style.transition = 'none';
        counter = caurselImages.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});