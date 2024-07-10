const container = document.querySelector('[data-video="information-video"]');
const cover = document.querySelector('[data-video="information-video"]').querySelector('picture');
const button = document.querySelector('[data-video="information-video"]').querySelector('[data-video-button="video-button"]');

const reproduceVideo = () => {
  const video = document.createElement('iframe');

  video.classList.add('information__button-player');
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'Айти онлайн курсы');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allowfullscreen', '');
  container.append(video);
};

const reproduceYoutubeVideo = () => {
  if (container && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      container.classList.remove('information__video--background');
      cover.style.display = 'none';
      button.style.display = 'none';
      reproduceVideo();
    });
  }
};

export {reproduceYoutubeVideo};
