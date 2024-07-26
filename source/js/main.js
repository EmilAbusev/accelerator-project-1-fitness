// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {reproduceYoutubeVideo} from './modules/inline-youtube/init-inline-youtube';
import {onTabClikc} from './modules/tabs/tabs-subscription';
import {initSwiperTours} from './modules/swiper-slider/swiper-jury';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    reproduceYoutubeVideo();
    initSwiperTours();
    onTabClikc();
  });
});
