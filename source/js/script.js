const header = document.querySelector('.header');
const burgerButton = document.querySelector('.header__toogle');
const navigation = document.querySelector('.header__navigation');
const map = L.map('map').setView({
  lat: 59.968321,
  lng: 30.31748,
}, 18);

L.tileLayer ('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerIcon = L.icon({
  iconUrl: './img/map-icon.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
})

const marker = L.marker([59.968321, 30.31748], {
  icon: markerIcon,
}).addTo(map);

header.classList.remove('page__nojs');

burgerButton.addEventListener('click', () => {
  navigation.classList.toggle('header__navigation--active');
  burgerButton.classList.toggle('header__toogle--close');
})

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__navigation-button--next',
    prevEl: '.slider__navigation-button--prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
