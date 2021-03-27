const hints = ({
  iconsSelector,
  iconsInnerSelector,
  hintsSelector,
  mainWrapperSelector
}) => {
  const icons = [...document.querySelectorAll(iconsSelector)],
    iconsInner = [...document.querySelectorAll(iconsInnerSelector)],
    hints = [...document.querySelectorAll(hintsSelector)];

  // установка стилей для падающих вниз подсказок
  const setDownHintStyle = hint => {
    const style = document.createElement('style');
    style.classList.add('down-hint-style');
    style.textContent = `
      ${hintsSelector} {
        z-index: 100;
      }
      ${hintsSelector}:before {
        -webkit-transform: rotate(180deg) ;
        transform: rotate(180deg) ; 
      }
    `;
    document.head.append(style);

    if (hint.closest(mainWrapperSelector)) {
      hint.closest(mainWrapperSelector).style.zIndex = '99';
    }
  };

  // отключение стилей упавших вниз подсказок
  const removeDownHintStyle = hint => {
    const style = document.querySelector('.down-hint-style');
    if (style) {
      style.remove();
    }
    if (hint) {
      if (hint.closest(mainWrapperSelector)) {
        hint.closest(mainWrapperSelector).style.zIndex = '';
      }
    }
  };

  // проверка влазит ли элемент по вертикали
  const elementInViewport = (el) => {
    let top = el.offsetTop,
      height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }

    return (
      top >= window.pageYOffset && (top + height) <= (window.pageYOffset + window.innerHeight)
    );
  };

  // перемещаем элемент вниз
  const downPositionElement = el => {
    el.style.transform = 'translateY(100%)';
    el.style.bottom = '-80px';
  };

  // сбрасываем смещение элемента
  const defaultPositionElement = el => {
    el.style.transform = '';
    el.style.bottom = '';
  };

  // показываем подсказку по индексу
  const showHint = (index) => {

    if (!elementInViewport(hints[index])) {
      setDownHintStyle(hints[index]);
      downPositionElement(hints[index]);
    }

    hints[index].style.visibility = 'visible';
    hints[index].style.opacity = `1`;
    iconsInner[index].style.opacity = '1';

  };

  // закрываем подсказку по индексу
  const closeHint = (index) => {
    hints[index].style.visibility = '';
    hints[index].style.opacity = '';
    defaultPositionElement(hints[index]);
    removeDownHintStyle(hints[index]);
    iconsInner[index].style.opacity = '';
  };

  // показываем подсказки при наведении и скрываем при уводе курсора
  icons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
      showHint(index);
    });
    icon.addEventListener('mouseleave', () => {
      closeHint(index);
    });
  });

};

export default hints;