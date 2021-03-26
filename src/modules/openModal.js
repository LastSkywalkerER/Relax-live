const openModal = ({
  modalWrapSelector,
  modalWindowSelector,
  openButtonsSelector,
  closeButtonSelector,
  timer,
}) => {
  const modalWrap = document.querySelector(modalWrapSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    modalWindow = modalWrap.querySelector(modalWindowSelector),
    step = 10;

  const open = () => {
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

  const close = () => {
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
      close();
    }
  };

  if (openButtonsSelector) {
    openButtons.forEach(button => {
      button.addEventListener('click', open);
    });
  } else {
    open();
    setTimeout(close, timer * 1000);
  }

};

export default openModal;