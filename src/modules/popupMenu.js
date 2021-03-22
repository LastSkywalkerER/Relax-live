const popupMenu = () => {
  const popupMenuWrap = document.querySelector('.popup-menu'),
    popupMenu = popupMenuWrap.childNodes[1],
    burgerButton = document.querySelector('.menu');

  const openPopup = () => {
    popupMenuWrap.style.visibility = 'visible';
    popupMenu.style.transform = `translate3D(0, 0, 0)`;

    popupMenuWrap.addEventListener('click', checkClose);
  };

  const closePopup = () => {
    popupMenuWrap.style.visibility = 'hidden';
    popupMenu.style.transform = `translate3D(555px, 0, 0)`;

    popupMenuWrap.removeEventListener('click', checkClose);
  };

  const checkClose = event => {
    const closeButtonSelector = '.close-menu',
      menuLinkSelector = '.menu-link',
      menuSelector = '.' + popupMenu.classList[0],
      menuWrapSelector = '.' + popupMenuWrap.classList[0];

    console.log(event.target.closest(menuSelector));
    if (!event.target.closest(menuSelector) || event.target.closest(menuLinkSelector) || event.target.closest(closeButtonSelector)) {
      closePopup();
    }
  };

  burgerButton.addEventListener('click', openPopup);

};

export default popupMenu;