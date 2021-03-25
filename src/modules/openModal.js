const openModal = ({
  modalWrapSelector,
  modalWindowSelector,
  openButtonsSelector,
  closeButtonSelector
}) => {
  const modalWrap = document.querySelector(modalWrapSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    modalWindow = document.querySelector(modalWindowSelector),
    step = 10;

  const openModal = () => {
    let scale = 0;

    modalWrap.style.visibility = 'visible';
    modalWindow.style.transform = `scale(${scale/100})`;

    const openAnimation = () => {
      scale += step;
      modalWindow.style.transform = `scale(${scale/100})`;
      if (scale < 100) {
        requestAnimationFrame(openAnimation);
      }
    };

    openAnimation();

    modalWrap.addEventListener('click', checkClose);
  };

  const closeModal = () => {
    let scale = 100;

    modalWindow.style.transform = `scale(${scale/100})`;

    const closeAnimation = () => {
      scale -= step;
      modalWindow.style.transform = `scale(${scale/100})`;
      if (scale >= 10) {
        requestAnimationFrame(closeAnimation);
      } else {
        modalWrap.style.visibility = '';
      }
    };

    closeAnimation();

    modalWrap.removeEventListener('click', checkClose);
  }

  const checkClose = event => {
    if (event.target.closest(closeButtonSelector) || !event.target.closest(modalWindowSelector)) {
      closeModal();
    }
  }

  openButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });


};

export default openModal;