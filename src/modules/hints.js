const hints = ({
  iconsSelector,
  iconsInnerSelector,
  hintsSelector,
  mainWrapperSelector
}) => {
  const icons = [...document.querySelectorAll(iconsSelector)],
    iconsInner = [...document.querySelectorAll(iconsInnerSelector)],
    hints = [...document.querySelectorAll(hintsSelector)];

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

  const downPositionElement = el => {
    el.style.transform = 'translateY(100%)';
    el.style.bottom = '-80px';
  };

  const defaultPositionElement = el => {
    el.style.transform = '';
    el.style.bottom = '';
  };

  const showHint = (index) => {
    // let opacity = 0;

    if (!elementInViewport(hints[index])) {
      setDownHintStyle(hints[index]);
      downPositionElement(hints[index]);
    }

    hints[index].style.visibility = 'visible';

    // const appearAnimation = () => {
    //   opacity += 0.05;
    //   hints[index].style.opacity = `${opacity}`;
    //   if (opacity <= 1) {
    //     requestAnimationFrame(appearAnimation);
    //   }
    // };

    // appearAnimation();
    hints[index].style.opacity = `1`;
    iconsInner[index].style.opacity = '1';

  };

  const closeHint = (index) => {
    // let opacity = 1;

    // const disappearAnimation = () => {
    //   opacity -= 0.05;
    //   hints[index].style.opacity = `${opacity}`;
    //   if (opacity >= 0.05) {
    //     requestAnimationFrame(disappearAnimation);
    //   } else {
    //     hints[index].style.visibility = '';
    //     hints[index].style.opacity = '';
    //     if (elementInViewport(hints[index])) {
    //       defaultPositionElement(hints[index]);
    //       removeDownHintStyle(hints[index]);
    //     }
    //   }
    // };

    // disappearAnimation();
    hints[index].style.visibility = '';
    hints[index].style.opacity = '';
    defaultPositionElement(hints[index]);
    removeDownHintStyle(hints[index]);
    iconsInner[index].style.opacity = '';
  };

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