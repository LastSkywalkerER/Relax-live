import openNumber from './modules/openNumber';
import popupMenu from './modules/popupMenu';
import scroll from './modules/scroll';
import openModal from './modules/openModal';
import phoneMask from './modules/phoneMask';
import sendForm from './modules/sendForm';
import formulaPopup from './modules/formulaPopup';
import CarouselSlider from './modules/carouselSlider';

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
const carouselSlider = new CarouselSlider({
  main: '.formula-slider-wrap',
  wrap: '.formula-slider',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  position: -1,
  slidesToShow: 3,
  slidesToHighlight: 1,
  infinity: true,
  responsive: [{
      breackpoint: 768,
      slidesToShow: 1
    },

  ]
});
carouselSlider.init();
formulaPopup();