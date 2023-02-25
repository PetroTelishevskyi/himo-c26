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

function smoothScrolling(classNameForScroll) {
    // Init variables
    const menuLinks = document.querySelectorAll(classNameForScroll);

    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', e => {
                const currentLink = e.target;
                // Check atribut in link
                if (currentLink.dataset.goto && document.querySelector(currentLink.dataset.goto)) {
                    // Init section on page
                    const gotoBlock = document.querySelector(currentLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
                
                    if(iconMenu.classList.contains('_active')) {
                        iconMenu.classList.remove('_active');
                        bodyMenu.classList.remove('_active');
                        document.body.classList.remove('_lock');
                    };

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: 'smooth'
                    });

                    e.preventDefault();
                };
            });
        });
    };
};

smoothScrolling('.menu__link[data-goto]');
smoothScrolling('.header__logo[data-goto]');
smoothScrolling('.intro__button[data-goto]');