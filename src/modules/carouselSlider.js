class CarouselSlider {
  constructor({
    main,
    wrap,
    next,
    prev,
    pagination,
    overflow = false,
    hideOverflow = false,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    slidesToHighlight = 0,
    highlightSelector,
    responsive,
    minBreakpoint,
    maxBreakpoint,
    sliderInSlider,
    description,
  }) {
    try {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = [...document.querySelector(wrap).children];
    } catch {
      console.warn('CarouselSlider: optins "main" and "wrap" are required!');
      this.init = () => {};
      return;
    }
    this.next = next;
    this.prev = prev;
    this.pagination = pagination;
    this.overflow = overflow;
    this.hideOverflow = hideOverflow;
    this.slidesToShow = slidesToShow;
    this.slidesToHighlight = slidesToHighlight;
    this.highlightSelector = highlightSelector;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
    this.maxBreakpoint = maxBreakpoint;
    this.minBreakpoint = minBreakpoint;
    this.createNewSliderInSlider = sliderInSlider;
    this.description = description;

    this.key = wrap.slice(1);
    this.checkResponse = () => {};
  }

  init() {
    if (this.prev === true && this.next === true) {
      this.addArrow();
      this.controlSlider();
    } else if (this.prev && this.next) {
      this.next = document.querySelector(this.next);
      this.prev = document.querySelector(this.prev);
      this.controlSlider();
    }

    this.addGloClass();

    if (this.checkWidthStyle()) {
      this.addStyle();
    }

    if (this.responsive) {
      this.responseInit();
    }

    if (this.options.infinity) {
      this.addMoreSlides();
    }



    this.pagainationInit();

    if (this.slidesToHighlight) {
      this.highlightСurrent();
    }


    if (this.createNewSliderInSlider) {
      this.createSliderInSlider('.' + this.slides[this.options.position].children[0].classList[0]);
    }

    if (this.description) {
      this.descriptionInit();
    }

    this.disableAnimation();
    if (this.checkWidthStyle()) {
      this.setCurrentSlide();
    }
  }

  descriptionInit() {
    this.descriptionSlides = [...document.querySelector(this.description.wrap).querySelectorAll(this.description.rows)];
    this.setCurrentDescriptionSlide();
  }

  setCurrentDescriptionSlide() {
    const absolutePosition = this.getAbsolutePosition() - 1;

    this.descriptionSlides.forEach(slide => {
      if (!this.description.active) {
        slide.style.display = 'none';
        slide.style.opacity = '0';
      } else {
        slide.classList.remove(this.description.active.slice(1));
      }
    });

    this.descriptionSlides.forEach((slide, index) => {
      if (index === absolutePosition) {
        if (!this.description.active) {
          slide.style.display = 'block';
          slide.style.opacity = '1';
        } else {
          slide.classList.add(this.description.active.slice(1));
        }
      }
    });

  }

  pagainationInit() {
    if (this.pagination) {
      this.pagination.forEach(pagination => {
        if (pagination.type === 'counter') {
          this.paginationCurrent = document.querySelector(pagination.wrap).querySelector(pagination.current);
          this.paginationTotal = document.querySelector(pagination.wrap).querySelector(pagination.total);
          this.paginationCounter = pagination;
          this.controlPaginationCounter();
        }
        if (pagination.type === 'button') {
          this.butonsWrap = document.querySelector(pagination.wrap);
          this.buttons = [...this.butonsWrap.children];
          this.paginationButton = pagination;
          this.controlPaginationButton();
        }
      });

    }
  }

  checkWidthStyle() {

    if (this.maxBreakpoint && !this.minBreakpoint) {
      if (document.documentElement.clientWidth <= this.maxBreakpoint) {

        return true;
      }
    } else if (!this.maxBreakpoint && this.minBreakpoint) {
      if (document.documentElement.clientWidth >= this.minBreakpoint) {

        return true;
      }
    } else if (this.maxBreakpoint && this.minBreakpoint) {
      if (document.documentElement.clientWidth >= this.minBreakpoint && document.documentElement.clientWidth <= this.maxBreakpoint) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }

  addMoreSlides() {
    this.clonedSlides = [];
    this.clonedSlides.push(this.slides.map(element => element.cloneNode(true)));
    this.clonedSlides.push(this.slides);
    this.clonedSlides.push(this.slides.map(element => element.cloneNode(true)));

    this.rerenderSlides();
  }

  rerenderSlides() {
    this.options.position += this.slides.length;
    this.moveSlides();

    this.clonedSlides.forEach(slides => slides.forEach(slide => this.wrap.append(slide)));

  }

  addGloClass() {
    this.main.classList.add(`glo-slider-${this.key}`);
    this.wrap.classList.add(`glo-slider__wrap-${this.key}`);
    for (const item of this.slides) {
      item.classList.add(`glo-slider__item-${this.key}`);
    }
  }

  addStyle() {
    this.style = document.getElementById(`sliderCarousel-style-${this.key}`);
    if (!this.style) {
      this.style = document.createElement('style');
      this.style.id = `sliderCarousel-style-${this.key}`;
    }

    this.style.textContent = `
    .glo-slider-${this.key} {
      ${this.overflow ? '' : 'overflow-x: hidden !important'};
      position: relative;
    }
    .glo-slider__wrap-${this.key} {
      display: flex !important;
      flex-wrap: nowrap !important;
      transition: transform 0.5s !important;
      will-change: transform !important;
      margin: 0 !important;
    }

    .glo-slider__item-${this.key} {
      flex: 0 0 ${this.options.widthSlide}% !important;
      margin: auto 0 !important;
      transition: 200ms;
    }
    `;

    document.head.append(this.style);
  }

  disableAnimation() {
    if (this.style) {
      this.style.textContent = `
    .glo-slider-${this.key} {
      ${this.overflow ? '' : 'overflow-x: hidden !important'};
      position: relative;
    }
    .glo-slider__wrap-${this.key} {
      display: flex !important;
      flex-wrap: nowrap !important;
      margin: 0 !important;
    }

    .glo-slider__item-${this.key} {
      flex: 0 0 ${this.options.widthSlide}% !important;
      margin: auto 0 !important;
    }
    `;

      document.head.append(this.style);
    }
  }

  controlSlider() {
    if (this.prev && this.next) {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));

      document.addEventListener('keydown', this.setSlideKeys.bind(this));
    }
  }

  setSlideKeys(event) {
    if (event.key === 'ArrowRight') {
      this.nextSlider();
    }
    if (event.key === 'ArrowLeft') {
      this.prevSlider();
    }
  }

  controlPagination() {
    if (this.paginationCounter) {
      this.controlPaginationCounter();
    }
  }

  getAbsolutePosition() {
    let absolutePosition = this.options.position + 1;
    while ((absolutePosition - this.slides.length) > 0) {
      absolutePosition -= this.slides.length;
    }
    return absolutePosition;
  }

  controlPaginationCounter() {
    const counter = this.getAbsolutePosition();
    this.paginationCurrent.textContent = counter;
    this.paginationTotal.textContent = this.slides.length;
  }

  controlPaginationButton() {
    this.butonsWrap.addEventListener('click', event => {
      this.buttons.forEach((buton, index) => {
        buton.classList.remove(this.paginationButton.active.slice(1));
        if (event.target === buton || buton.contains(event.target)) {
          buton.classList.add(this.paginationButton.active.slice(1));
          this.options.position = index;
          this.setCurrentSlide();
          if (this.createNewSliderInSlider) {
            this.changeSliderInSlider('.' + this.slides[this.options.position].children[0].classList[0]);
          }
        }
      });
    })
  }

  createSliderInSlider(currentSlideSelector) {

    this.sliderInSlider = this.createNewSliderInSlider({
      nextSliderSelector: currentSlideSelector
    });
    this.sliderInSlider.init();
  }

  changeSliderInSlider(currentSlideSelector) {
    this.sliderInSlider.delete();
    this.sliderInSlider = this.createNewSliderInSlider({
      nextSliderSelector: currentSlideSelector,
    });
    this.sliderInSlider.init();
  }

  moveSlides() {
    this.wrap.style.transform = `translateX(${-this.options.position * this.options.widthSlide}%)`;
  }

  setCurrentSlide() {
    if (this.checkWidthStyle()) {
      this.addStyle();
    }
    this.moveSlides();
    if (this.hideOverflow) {
      this.showSlides();
    }
    if (this.slidesToHighlight) {
      this.highlightСurrent();
    }
    this.controlPagination();

    if (this.prev && this.next) {
      if (!this.options.infinity) {
        if (this.options.position === 0) {
          this.prev.style.visibility = 'hidden';
          this.next.style.visibility = 'inherit';
        } else if (this.options.position === this.options.maxPosition) {
          this.prev.style.visibility = 'inherit';
          this.next.style.visibility = 'hidden';
        } else {
          this.prev.style.visibility = 'inherit';
          this.next.style.visibility = 'inherit';
        }
      }
    }

    if (this.description) {
      this.setCurrentDescriptionSlide();
    }
  }

  prevSlider() {
    if (this.options.infinity && this.options.position < this.slides.length / 2) {
      this.disableAnimation();
      this.options.position += this.slides.length;
      this.moveSlides();
    }
    if (this.options.infinity || this.options.position > 0) {
      setTimeout(() => {
        --this.options.position;
        this.setCurrentSlide();
      }, 5);
    }
  }

  nextSlider() {
    if (this.options.infinity && this.options.position > this.slides.length * 2.5 - 1) {
      this.disableAnimation();
      this.options.position -= this.slides.length;
      this.moveSlides();
    }
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      setTimeout(() => {
        ++this.options.position;
        this.setCurrentSlide();
      }, 5);
    }
  }

  showSlides() {
    let beginSlideIndex = this.options.position,
      endSlideIndex = this.options.position + this.slidesToShow;
    if (beginSlideIndex === endSlideIndex) {
      endSlideIndex++;
    }
    const slidesToShow = [...this.wrap.children].slice(beginSlideIndex, endSlideIndex);

    [...this.wrap.children].forEach(slide => slide.style.opacity = '0');

    slidesToShow.forEach(slide => slide.style.opacity = '');
  }

  highlightСurrent() {
    let beginSlideIndex = this.options.position + Math.floor((this.slidesToShow - this.slidesToHighlight) / 2),
      endSlideIndex = this.options.position + Math.floor(this.slidesToShow - this.slidesToHighlight / 2);
    if (beginSlideIndex === endSlideIndex) {
      endSlideIndex++;
    }
    const slidesToHighlight = [...this.wrap.children].slice(beginSlideIndex, endSlideIndex);

    [...this.wrap.children].forEach(slide => {
      if (!this.highlightSelector) {
        slide.style.transform = '';
        slide.style.opacity = '';
        [...slide.children].forEach(item => item.style.zIndex = '');
      } else {
        slide.classList.remove(this.highlightSelector.slice(1));
      }
    });

    if (this.hideOverflow) {
      this.showSlides();
    }

    slidesToHighlight.forEach(slide => {
      if (!this.highlightSelector) {
        slide.style.transform = 'scale(1.2)';
        slide.style.opacity = '1';
        [...slide.children].forEach(item => item.style.zIndex = '99');
      } else {
        slide.classList.add(this.highlightSelector.slice(1));
      }
    });
  }

  stylizationArrows() {
    this.prev.classList.add('glo-slider__prev');
    this.next.classList.add('glo-slider__next');

    let style = document.getElementById(`glo-slider-arrows`);
    if (!style) {
      style = document.createElement('style');
      style.id = `glo-slider-arrows`;

      style.textContent = `
      .glo-slider__prev,
      .glo-slider__next {
        position: absolute !important;
        top: 45% !important;
        transform: translateY(-50%) !important;
      }

      .glo-slider__next {
        right: 0 !important;
        transform: translateX(-50%) !important;
      }

      .glo-slider__prev {
        left: 0 !important;
        transform: translateX(50%) !important;
      }
    `;

      document.head.append(style);
    }
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.main.append(this.prev);
    this.main.append(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__prev,
      .glo-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
        position: absolute;
        top: 50%;
        transform: translateY(50%);
      }

      .glo-slider__next {
        border-left-color: #19b5fe;
        right: 0;
        transform: translateX(50%);
      }

      .glo-slider__prev {
        border-right-color: #19b5fe;
        left: 0;
        transform: translateX(-50%);
      }

      .glo-slider__prev:hover,
      .glo-slider__next:hover, 
      .glo-slider__prev:focus,
      .glo-slider__next:focus {
        background: transparent;
        outline: none;
      }
    `;

    document.head.append(style);
  }

  updateOptions() {
    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
    this.options.maxPosition = this.slides.length - this.slidesToShow;
    if (this.checkWidthStyle()) {
      this.addStyle();
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map(item => item.breackpoint),
      maxResponse = Math.max(...allResponse);

    this.checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            if (this.options.position < 0) {
              this.options.position++;
            }
            this.updateOptions();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.updateOptions();
      }
      this.setCurrentSlide();

      if (this.checkWidthStyle()) {
        this.addStyle();
      } else {
        if (this.style) {
          this.clearStyle();
        }
      }

    };

    this.checkResponse();

    window.addEventListener('resize', this.checkResponse.bind(this));
  }

  clearStyle() {
    this.style.remove();
    this.options.position = 0;
    this.moveSlides();
  }

  delete() {
    this.wrap.textContent = '';
    this.slides.forEach(slide => this.wrap.append(slide));

    if (this.style) {
      this.clearStyle();
    }

    if (this.prev && this.next) {
      this.prev.removeEventListener('click', this.prevSlider.bind(this));
      this.next.removeEventListener('click', this.nextSlider.bind(this));
    }
    document.removeEventListener('keydown', this.setSlideKeys.bind(this));
    window.removeEventListener('resize', this.checkResponse.bind(this));
  }
};

export default CarouselSlider;