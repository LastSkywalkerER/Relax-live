const popupMenu = () => {
  // получаем обёртку всплыющего меню и через неё сам блок меню, а так же кнопку открытия меню
  const popupMenuWrap = document.querySelector('.popup-menu'),
    popupMenu = popupMenuWrap.childNodes[1],
    burgerButton = document.querySelector('.menu');

  // прячем меню, чтоб оно не летало по экрану
  popupMenu.style.visibility = 'hidden';

  // функция открытия меню
  const openPopup = () => {
    popupMenuWrap.style.visibility = 'visible';
    popupMenu.style.visibility = 'visible';
    popupMenu.style.transform = `translate3D(0, 0, 0)`;

    popupMenuWrap.addEventListener('click', checkClose);
  };

  // функция закрытия меню
  const closePopup = () => {
    popupMenuWrap.style.visibility = 'hidden';
    popupMenu.style.visibility = 'hidden';
    popupMenu.style.transform = '';

    popupMenuWrap.removeEventListener('click', checkClose);
  };

  // проверяем куда мы кликнули и зачем
  const checkClose = event => {
    const closeButtonSelector = '.close-menu',
      menuLinkSelector = '.menu-link',
      menuSelector = '.' + popupMenu.classList[0];

    if (!event.target.closest(menuSelector) || event.target.closest(menuLinkSelector) || event.target.closest(closeButtonSelector)) {
      closePopup();
    }
  };

  // события на кнопку открытия, места закрытия меню
  burgerButton.addEventListener('click', openPopup);
};

export default popupMenu;