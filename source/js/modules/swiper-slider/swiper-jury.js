import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const swiperSlider = document.querySelector('.swiper');
const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');

const mySwiper = () => {
  new Swiper(swiperSlider, {
    modules: [Navigation],

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
};

const initSwiperTours = () => {
  if (document.body.contains(swiperSlider)) {
    mySwiper();
  }
};

export { initSwiperTours };
