const fullPrice = () => {
  const fullPriceModal = document.querySelector('.popup-repair-types'),
    modaWindowSelector = '.popup-dialog',
    closeBtnSelector = '.close';

  let isOpen = 0;

  const openModal = () => {
    isOpen = 1;
    fullPriceModal.style.visibility = 'visible';

    fullPriceModal.addEventListener('click', checkClose);
  };

  const closeModal = () => {
    isOpen = 0;
    fullPriceModal.style.visibility = '';

    fullPriceModal.removeEventListener('click', checkClose);
  }

  const checkClose = event => {
    if (event.target.closest(closeBtnSelector) || !event.target.closest(modaWindowSelector)) {
      closeModal();
    }
  }

  document.addEventListener('click',
    event => {
      if (/Полный список услуг и цен/gi
        .test(event.target.textContent) && event.target.closest('a') && !isOpen) {
        openModal();
      }
    });
};

export default fullPrice;