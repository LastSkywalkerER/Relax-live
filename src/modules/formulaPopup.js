const formulaPopup = () => {
  const icons = [...document.querySelectorAll('.formula-item__icon')],
    iconsInner = [...document.querySelectorAll('.formula-item__icon-inner')],
    hints = [...document.querySelectorAll('.formula-item-popup')],
    rowSelector = '.row';

  const setDownHintStyle = hint => {
    const style = document.createElement('style');
    style.classList.add('down-hint-style');
    style.textContent = `
      .formula-item-popup {
        z-index: 100;
      }
      .formula-item-popup:before {
        -webkit-transform: rotate(180deg) translateY(20px);
        transform: rotate(180deg) translateY(20px); 
      }
    `;
    document.head.append(style);

    if (hint.closest(rowSelector)) {
      hint.closest(rowSelector).style.zIndex = '99';
    }
  };

  const removeDownHintStyle = hint => {
    const style = document.querySelector('.down-hint-style');
    if (style) {
      style.remove();
    }
    if (hint) {
      if (hint.closest(rowSelector)) {
        hint.closest(rowSelector).style.zIndex = '';
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

export default formulaPopup;