/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
const main = document.querySelector('.main');
const mainWrapper = main.querySelector('.main__wrapper');
const header = document.querySelector('.header');
const menuToggle = header.querySelector('.header__toggle-menu');
const openMenu = header.querySelector('.header__menu-open-svg');
const closeMenu = header.querySelector('.header__menu-close-svg');
const headerMenu = header.querySelector('.header__menu');
const buttonLang = header.querySelectorAll('.header__select-item');
const manuLang = header.querySelector('.header__select-menu');
const displayLang = header.querySelector('.header__select-display');
const selectLang = header.querySelector('.header__select');
const langs = header.querySelectorAll('.header__select-link');

const onToggleMenu = () => {
  openMenu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  headerMenu.classList.toggle('active');
  header.classList.toggle('active');
  manuLang.classList.toggle('active');
};

const onRemoveMenu = () => {
  openMenu.classList.add('active');
  closeMenu.classList.remove('active');
  headerMenu.classList.remove('active');
  header.classList.remove('active');
  manuLang.classList.remove('active');
};

const onToggleLang = () => {
  displayLang.classList.toggle('active');
  selectLang.classList.toggle('active');
};

const switchSlides = (buttons, element, items) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }

      buttons[i].classList.add('active');
      element.textContent = items[i].textContent;
      onToggleLang();
    });
  }
};

const checkWidth1600 = () => {
  if (window.innerWidth >= 1600) {
    onRemoveMenu();
  }
};

new Swiper('.main', {
  loop: true,
  slidesPerView: 1,
  direction: 'vertical',
  // navigation: {
  //   nextEl: '.reviews__control-button--next',
  //   prevEl: '.reviews__control-button--prev',
  // },
  // pagination: {
  //   el: '.reviews__pagination',
  //   type: 'fraction',
  // },
});

const onToggleSlider = () => {
  main.classList.toggle('.swiper-container');
  mainWrapper.classList.toggle('.swiper-wrapper');
};

const checkWidth768 = () => {
  if (window.innerWidth >= 768) {
    onToggleSlider();
  }
};

window.addEventListener('resize', checkWidth768);
window.addEventListener('resize', checkWidth1600);
displayLang.addEventListener('click', onToggleLang);
menuToggle.addEventListener('click', onToggleMenu);

switchSlides(buttonLang, displayLang, langs);
