/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
const main = document.querySelector('.main');
let section = main.querySelector('.main__swiper-slide.swiper-slide-active');
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
const headerNavLink = header.querySelectorAll('.header__nav-link');
const swiperSlides = document.querySelectorAll('.swiper-slide');

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

const checkWidth1700 = () => {
  if (window.innerWidth >= 1700) {
    onRemoveMenu();
  }
};

const mainSwiper = new Swiper('.main', {
  direction: 'vertical',
  navigation: {
    nextEl: '.main__control-button--next',
    prevEl: '.main__control-button--prev',
  },
  pagination: {
    el: '.main__pagination',
    type: 'fraction',
    renderFraction: (currentClass, totalClass) => `0 <span class="${currentClass}"></span>` + '<span class="main__pagination-slash">/</span>' + `<span class="main__pagination-slash">0</span><span class="${totalClass}"></span>`,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 1,
    },
  },
});

const addMainSwiper = () => {

  if (window.innerWidth < 768) {
    for (let slide of swiperSlides) {
      slide.style.height = null;
    }
  }
};

new Swiper('.party__img-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  navigation: {
    nextEl: '.party__button-img--next',
    prevEl: '.party__button-img--prev',
  },
  nested: true,
});

new Swiper('.party__container', {
  spaceBetween: 48,
  direction: 'horizontal',
  pagination: {
    el: '.party__pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.4,
    },
    1695: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.party__button--next',
        prevEl: '.party__button--prev',
      },
    },
  },
});

const sectionId = () => {
  document.querySelector('.main__swiper-slide.swiper-slide-active').id;
};

if (sectionId() >= 2) {
  for (let link of headerNavLink) {
    link.style.color = '#303030';
  }
}

for (let link of headerNavLink) {
  link.addEventListener('click', onRemoveMenu);
}

window.addEventListener('resize', addMainSwiper);
window.addEventListener('resize', checkWidth1700);
displayLang.addEventListener('click', onToggleLang);
menuToggle.addEventListener('click', onToggleMenu);

switchSlides(buttonLang, displayLang, langs);
