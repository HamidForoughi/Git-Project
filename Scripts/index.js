const $ = document
const customScroll = $.getElementById('scroll')
const navBtn = $.querySelector('.nav__btn')
const navMenu = $.querySelector('.nav-mobile')
const menuItemLink = $.querySelectorAll('.menu__item__link')
const svgEelem = $.querySelectorAll('.svg-fill')
const scrollToTop = $.querySelector('footer__scroll')

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const documentHeight = $.body.clientHeight
    const windowHeight = window.innerHeight
    const scrollPercent = scrollTop / (documentHeight - windowHeight)
    const scrollPercentRounded = Math.round(scrollPercent * 100)
    customScroll.style.width = scrollPercentRounded + '%'
})

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

scrollToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

