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