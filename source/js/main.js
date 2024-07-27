// import {reproduceYoutubeVideo} from './modules/inline-youtube/init-inline-youtube';
// Закоментировал функцию прогрузки видео т.к из-за него прохоидит проверка по ПП свайпера блока жури.
import {onTabClikc} from './modules/tabs/tabs-subscription';
import {initSwiperTours} from './modules/swiper-slider/swiper-jury';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    // reproduceYoutubeVideo();
    initSwiperTours();
    onTabClikc();
  });
});
