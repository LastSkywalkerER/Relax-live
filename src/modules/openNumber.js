const openNumber = () => {
  // получаем кнопку-стрелку, блок во вторым номером, высоту блока с первым номером
  const arrowButton = document.querySelector('.header-contacts__arrow'),
    secondNumber = document.querySelector('.header-contacts__phone-number-accord'),
    heightFirstNumber = document.querySelector('.header-contacts__phone-number-wrap').clientHeight;

  // состояние блока со вторым номером
  let isOpen = 0;

  // событие на клик кнопки, выдвинуть или задвинуть второй номер в зависимости от состояния и отражение стрелки масштабом
  arrowButton.addEventListener('click', () => {
    if (!isOpen) {
      secondNumber.style.transform = `translateY(${heightFirstNumber}px)`;
      secondNumber.childNodes[0].style.opacity = '1';
      arrowButton.style.transform = 'scaleY(-1)';
      isOpen = 1;
    } else if (isOpen) {
      secondNumber.style.transform = `translateY(0px)`;
      secondNumber.childNodes[0].style.opacity = '0';
      arrowButton.style.transform = 'scaleY(1)';
      isOpen = 0;
    }
  });
};

export default openNumber;