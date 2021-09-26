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
const langArrow = header.querySelector('.header__display-arrow-svg');
const headerNavLink = header.querySelectorAll('.header__nav-link');
const mainControl = main.querySelector('.main__control');
const swiperSlides = main.querySelectorAll('.swiper-slide');

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
    1695: {
      slidesPerView: 1,
    },
  },
  hashNavigation: {
    watchState: true,
  },
  on: {
    slideChange: (swiper) => {
      if (('CurrentActive:', swiper.activeIndex) > 0) {
        for (let link of headerNavLink) {
          link.classList.add('list');
        }
        displayLang.style.color = '#303030';
        langArrow.style.fill = '#303030';
        mainControl.classList.add('active');
        openMenu.classList.add('list');
      } else {
        for (let link of headerNavLink) {
          link.classList.remove('list');
        }
        displayLang.style.color = '#ffffff';
        langArrow.style.fill = '#ffffff';
        mainControl.classList.remove('active');
        openMenu.classList.remove('list');
      }
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

new Swiper('.judges__container', {
  pagination: {
    el: '.judges__pagination',
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
        nextEl: '.judges__button--next',
        prevEl: '.judges__button--prev',
      },
    },
  },
});

for (let link of headerNavLink) {
  link.addEventListener('click', onRemoveMenu);
}

window.addEventListener('resize', addMainSwiper);
window.addEventListener('resize', checkWidth1700);
displayLang.addEventListener('click', onToggleLang);
menuToggle.addEventListener('click', onToggleMenu);

switchSlides(buttonLang, displayLang, langs);
