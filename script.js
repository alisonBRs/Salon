const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const click of toggle) {
  click.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const closeAll = document.querySelectorAll('ul li .animation')

for (const link of closeAll) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const iconUp = document.querySelector('.bck-top')
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 600) {
    iconUp.classList.add('show')
  } else {
    iconUp.classList.remove('show')
  }
})

/****************** SWIPER*************************/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    770: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/****************** Scroll Reveal*************************/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonals .testimonials,
  #contact .box-title, #contact .contact-box,
  #footer .logo, #footer .copyright, #footer .footer-icons`,
  { interval: 100 }
)
