const openModal = ({
  modalWrapSelector,
  modalWindowSelector,
  openButtonsSelector,
  closeButtonSelector
}) => {
  const modalWrap = document.querySelector(modalWrapSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    modalWindow = document.querySelector(modalWindowSelector);

  const openModal = () => {
    let scale = 0;

    modalWrap.style.visibility = 'visible';
    modalWindow.style.transform = `scale(${scale})`;

    const openAnimation = () => {
      scale += 0.1;
      modalWindow.style.transform = `scale(${scale})`;
      if (scale <= 1) {
        requestAnimationFrame(openAnimation);
      }
    };

    openAnimation();

    modalWrap.addEventListener('click', checkClose);
  };

  const closeModal = () => {
    let scale = 1;

    modalWindow.style.transform = `scale(${scale})`;

    const closeAnimation = () => {
      scale -= 0.1;
      modalWindow.style.transform = `scale(${scale})`;
      if (scale >= 0.1) {
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