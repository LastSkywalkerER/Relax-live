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