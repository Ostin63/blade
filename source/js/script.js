/* eslint-disable no-shadow */
/* eslint-disable id-length */
const header = document.querySelector('.header');
const menuToggle = header.querySelector('.header__toggle-menu');
const openMenu = header.querySelector('.header__menu-open-svg');
const closeMenu = header.querySelector('.header__menu-close-svg');
const headerMenu = header.querySelector('.header__menu');
const buttonLang = header.querySelectorAll('.header__select-link');
const textTop = header.querySelector('.header__text-top');

const onToggleMenu = () => {
  openMenu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  headerMenu.classList.toggle('active');
  header.classList.toggle('active');
  textTop.classList.toggle('d-none');
};

const switchSlides = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }

      buttons[i].classList.add('active');
    });
  }
};

menuToggle.addEventListener('click', onToggleMenu);

switchSlides(buttonLang);
