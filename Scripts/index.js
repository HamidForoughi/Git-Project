const $ = document
const navBtn = $.querySelector('.nav__btn')
// const header = $.querySelector('.header')
const navMenu = $.querySelector('.nav-mobile')
const menuItemLink = $.querySelectorAll('.menu__item__link')
let svgEelem = $.querySelectorAll('.svg-fill')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--open')
    navMenu.classList.toggle('nav-mobile--open')
    // header.classList.toggle('header--hide')
})

menuItemLink.forEach(function (item) {
    item.addEventListener('click', () => {
        item.classList.toggle('menu__item__link--active')
    })
})

svgEelem.forEach(function (svg) {
    svg.addEventListener('click', () => {
        svg.classList.toggle('item__icon-like--fill')
    })
})