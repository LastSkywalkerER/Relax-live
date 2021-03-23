import openNumber from './modules/openNumber';
import popupMenu from './modules/popupMenu';
import scroll from './modules/scroll';
import openModal from './modules/openModal';
import phoneMask from './modules/phoneMask';
import sendForm from './modules/sendForm';

openNumber();
popupMenu();
scroll();
openModal({
  modalWrapSelector: '.popup-repair-types',
  modalWindowSelector: '.popup-dialog',
  openButtonsSelector: '#full-price',
  closeButtonSelector: '.close'
});
phoneMask('+7 (___) ___-__-__');
sendForm();