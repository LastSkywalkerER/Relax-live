'use strict';

import openNumber from './modules/openNumber';
import popupMenu from './modules/popupMenu';
import scroll from './modules/scroll';
import openModal from './modules/openModal';
import phoneMask from './modules/phoneMask';
import sendForm from './modules/sendForm';
import formulaPopup from './modules/formulaPopup';
import CarouselSlider from './modules/carouselSlider';
import slider from './modules/slider';

openNumber();
popupMenu();
scroll();
openModal({
  modalWrapSelector: '.popup-privacy',
  modalWindowSelector: '.popup-dialog-privacy',
  openButtonsSelector: '.link-privacy',
  closeButtonSelector: '.close'
});
openModal({
  modalWrapSelector: '.popup-repair-types',
  modalWindowSelector: '.popup-dialog-repair-types',
  openButtonsSelector: '#full-price',
  closeButtonSelector: '.close'
});
phoneMask('+7 (___) ___-__-__');
sendForm();
const carouselSliderFormula = new CarouselSlider({
  main: '.formula-slider-wrap',
  wrap: '.formula-slider',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  position: -1,
  slidesToShow: 3,
  slidesToHighlight: 1,
  overflow: true,
  hideOverflow: true,
  infinity: true,
  responsive: [{
      breackpoint: 768,
      slidesToShow: 1
    },

  ]
});
carouselSliderFormula.init();
formulaPopup();

const carouselSliderRepairTypesTabs = new CarouselSlider({
  main: '.repair-types-slider',
  wrap: '.slider-wrapper',
  overflow: true,
  slidesToShow: 1,
  pagination: {
    type: 'button',
    wrap: '.nav-list-repair',
    active: '.active',
  },
  sliderInSlider: (nextSliderSelector, prevSlider) => {
    if (prevSlider) {
      prevSlider.delete();
    }
    return new CarouselSlider({
      main: '.repair-types-slider',
      wrap: nextSliderSelector,
      prev: '#repair-types-arrow_left',
      next: '#repair-types-arrow_right',
      overflow: true,
      pagination: {
        type: 'counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
      },
      slidesToShow: 1,
      infinity: true,
    });
  },
});
carouselSliderRepairTypesTabs.init();

const carouselSliderRepairTypesTabsButton = new CarouselSlider({
  main: '.repair-types-nav',
  wrap: '.nav-list-repair',
  prev: '#nav-arrow-repair-left_base',
  next: '#nav-arrow-repair-right_base',
  slidesToShow: 3,
  responsive: [{
      breackpoint: 768,
      slidesToShow: 2
    },
    {
      breackpoint: 575,
      slidesToShow: 1
    },
  ],
  maxBreakpoint: 1024,
});

carouselSliderRepairTypesTabsButton.init();

const carouselSliderPortfolio = new CarouselSlider({
  main: '.portfolio-slider',
  wrap: '.slider-wrapper__portfolio-slider',
  prev: '#portfolio-arrow_left',
  next: '#portfolio-arrow_right',
  slidesToShow: 3,
  overflow: true,
  responsive: [{
      breackpoint: 1024,
      slidesToShow: 2
    },
    {
      breackpoint: 900,
      slidesToShow: 1
    },
  ],
  minBreakpoint: 575,
});

carouselSliderPortfolio.init();