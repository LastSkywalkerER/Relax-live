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
});
carouselSliderRepairTypesTabs.init();

const carouselSliderRepairTypes = new CarouselSlider({
  main: '.repair-types-slider',
  wrap: '.types-repair1',
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
carouselSliderRepairTypes.init();