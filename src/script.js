const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
});
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header_burger_menu');
const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    burgerMenu.classList.remove('header_burger_menu-active');
})
burger.addEventListener('click', () => {
    if(burgerMenu.classList.contains('header_burger_menu-active')) {
        burgerMenu.classList.remove('header_burger_menu-active');
        return
    }
    burgerMenu.classList.add('header_burger_menu-active');
})
window.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !burger.contains(e.target)) {
        burgerMenu.classList.remove('header_burger_menu-active');
    }
})