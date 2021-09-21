/* eslint-disable no-shadow */
/* eslint-disable id-length */
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

const switchSlides = (buttons, element, items, block) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }

      buttons[i].classList.add('active');
      element.textContent = items[i].textContent;
      block.classList.remove('active');
    });
  }
};

const checkWidth = () => {
  if (window.innerWidth >= 1600) {
    onRemoveMenu();
  }
};

window.addEventListener('resize', checkWidth);
displayLang.addEventListener('click', onToggleLang);
menuToggle.addEventListener('click', onToggleMenu);

switchSlides(buttonLang, displayLang, langs, selectLang);
