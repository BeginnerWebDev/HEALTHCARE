const navSlider = () => {
  const menu = document.querySelector('.nav-link');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active-dropdown');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('active-burger');
    burger.classList.toggle('toggle');
  });
};
navSlider();

let swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: true,
        },
        effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

let swiper2 = new Swiper('.swiper2', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});
