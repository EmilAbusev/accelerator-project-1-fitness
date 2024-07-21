import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


const swiperSlider = document.querySelector('.swiper');
const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');

const mySwiper = new Swiper(swiperSlider, {
  modules: [Navigation],

  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  loop: true,

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 39,
    },
    768: {
      slidesPerView: 2,
      initialSlide: 0,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 20,
    },
  }
});

const initSwiperTours = () => {
  if (document.body.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initSwiperTours };
