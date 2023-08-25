window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu_laptop');
    const menuClose = document.querySelector('.menu_close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});
