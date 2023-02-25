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

const introSwiper = new Swiper('.intro__swiper', {
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

const bigSwiper = new Swiper('.big-swiper__box', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // spaceBetween: 25,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    mousewheel: true,
    allowTouchMove: true,
    keyboard: {
        enable:true,
        onlyInViewport: true,
        pageDown:true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});

// const bigSwiper = new Swiper('.big-swiper__box', {
//     direction: 'vertical',
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     keyboard: {
//         enable:true,
//         onlyInViewport: true,
//         pageDown:true
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false
//     },
//     speed: 800,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
// });