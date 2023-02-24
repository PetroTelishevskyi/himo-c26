const iconMenu = document.querySelector('.icon-menu'),
    bodyMenu = document.querySelector('.menu');

if (iconMenu) {
    iconMenu.addEventListener('click', e => {
        e.preventDefault();
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
};

const intrSwiper = new Swiper('.intro__swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoHeight: true,
    keyboard: {
        enable:true,
        onlyInViewport: true,
        pageDown:true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
});