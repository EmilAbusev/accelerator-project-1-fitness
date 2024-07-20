const { default: Swiper } = ('swiper');

new Swiper('.swiper-container', {
  navigation: {
    prevEl: 'swiper-button-next',
    nextEl: 'swiper-button-prev'
  }
});
