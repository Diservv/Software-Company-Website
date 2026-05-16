let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
};

new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
  },
  speed: 900,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
