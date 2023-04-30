const $ = document
const navBtn = $.querySelector('.nav__button')
const navMenu = $.querySelector('.nav-mobile')
const menuItemLink = $.querySelectorAll('.menu__item__link')
const svgEelem = $.querySelectorAll('.svg-fill')
const headerTitle = $.getElementById('app');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--open')
    navMenu.classList.toggle('nav-mobile--open')
})

menuItemLink.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('menu__item__link--active')
    })
})

svgEelem.forEach((svg) => {
    svg.addEventListener('click', () => {
        svg.classList.toggle('item__icon-like--fill')
    })
})

const typewriter = new Typewriter(headerTitle, {
    loop: false,
    cursor: '',
    delay: 60,
});

typewriter.typeString('دنیای دیجیتال در دستان شما')
    .start();

// const swiperSlider = new Swiper('.swiper', {
//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     pagination: {
//         el: '.swiper-pagination'
//     }
// })

const swiper = new Swiper(".mySwiper", {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


