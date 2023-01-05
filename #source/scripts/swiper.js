const swiper = new Swiper(".hero", {
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      if (index === 0) {
        return (
          '<li class="' +
          className +
          " hero__bullet" +
          '">' +
          '<span class="hero__bullet-text"> forge </span>' +
          "</li>"
        );
      } else if (index === 1) {
        return (
          '<li class="' +
          className +
          " hero__bullet" +
          '">' +
          '<span class="hero__bullet-text"> shade </span>' +
          "</li>"
        );
      } else if (index === 2) {
        return (
          '<li class="' +
          className +
          " hero__bullet" +
          '">' +
          '<span class="hero__bullet-text"> flit </span>' +
          "</li>"
        );
      }
    },
  },
});

const readMoreSlider = new Swiper(".read-more__slider-container", {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 40,
    scale: 0.9,
  },
  zoom: {
    maxRatio: 2,
  },
});
