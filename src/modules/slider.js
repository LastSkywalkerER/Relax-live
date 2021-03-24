const slider = () => {
  const
    dot = [],
    dotsWrapper = document.querySelector('.portfolio-dots'),
    slider = document.querySelector('.portfolio-content'),
    slide = slider.querySelectorAll('.portfolio-item'),
    slidesAutoPlayTime = 3000;

  for (let i = 0; i < slide.length; i++) {
    const dotElem = document.createElement('li');
    dotElem.classList.add('dot');
    if (i === 0) {
      dotElem.classList.add('dot-active');
    }
    dot.push(dotElem);
    dotsWrapper.append(dotElem);
  }

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const slideIncrement = () => {
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
  };

  const slideDecrement = () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    slideIncrement();

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = () => {
    interval = setInterval(autoPlaySlide, slidesAutoPlayTime);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      slideIncrement();
    } else if (target.matches('#arrow-left')) {
      slideDecrement();
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide();
};

export default slider;