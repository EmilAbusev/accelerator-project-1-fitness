// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {reproduceYoutubeVideo} from './modules/inline-youtube/init-inline-youtube';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    reproduceYoutubeVideo();
  });
});
