'use strict';

// импортируем модули
import openNumber from './modules/openNumber';
import popupMenu from './modules/popupMenu';
import scroll from './modules/scroll';
import openModal from './modules/openModal';
import phoneMask from './modules/phoneMask';
import sendForm from './modules/sendForm';
import hints from './modules/hints';
import CarouselSlider from './modules/carouselSlider';
import accordion from './modules/accordion';
import Filter from './modules/filter';
import Validator from './modules/validator';

// ждём загрузки документа
document.addEventListener('DOMContentLoaded', () => {

  // разворачивание номера в шапке
  openNumber();

  // активация меню по кнопке
  popupMenu();

  // включение плавной прокрутки
  scroll();

  // отрыте модалки с политикой конфеденциальности
  openModal({
    modalWrapSelector: '.popup-privacy',
    modalWindowSelector: '.popup-dialog-privacy',
    openButtonsSelector: '.link-privacy',
    closeButtonSelector: '.close'
  });

  // модлка со списком услуг
  openModal({
    modalWrapSelector: '.popup-repair-types',
    modalWindowSelector: '.popup-dialog-repair-types',
    openButtonsSelector: '#full-price',
    closeButtonSelector: '.close'
  });

  // маска на поля номеров
  phoneMask('+7 (___) ___-__-__');

  // функция отправки форм с вызовом модалки об успешной отправке
  sendForm({
    errorMessage: 'Что-то пошло не так...',
    successPopup: () => {
      openModal({
        modalWrapSelector: '.popup-thank',
        modalWindowSelector: '.popup-thank-bg',
        closeButtonSelector: '.close',
        timer: 3,
      });
    },
    formsSelector: 'form',
    validator: form => {
      const validator = new Validator({
        form: form,
        method: {
          'phone': [
            ['notEmpty'],
            ['pattern', 'phone']
          ],
          'email': [
            ['notEmpty'],
            ['pattern', 'email']
          ],
          'name': [
            ['notEmpty'],
            ['pattern', 'name']
          ]
        },
        defaultButtonClass: '.button',
      });
      validator.init();
    },
  });

  // запуск слайдера на кружках формулы успеха в мобильной версии
  const carouselSliderFormula = new CarouselSlider({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    position: -1,
    slidesToShow: 3,
    slidesToHighlight: 1,
    overflow: true,
    hideOverflow: true,
    infinity: true,
    responsive: [{
        breackpoint: 768,
        slidesToShow: 1
      },

    ]
  });
  carouselSliderFormula.init();

  // активация подсказок на кружках формулы успеха
  hints({
    iconsSelector: '.formula-item__icon',
    iconsInnerSelector: '.formula-item__icon-inner',
    hintsSelector: '.formula-item-popup',
    mainWrapperSelector: '.row',
  });

  // подключение слайдера слайдеров видов ремонта. На кнопки переключаются слайды. слайдами являются слайдера с картинками.
  const carouselSliderRepairTypesTabs = new CarouselSlider({
    main: '.repair-types-slider',
    wrap: '.slider-wrapper',
    overflow: true,
    slidesToShow: 1,
    pagination: [{
      type: 'button',
      wrap: '.nav-list-repair',
      active: '.active',
    }],
    sliderInSlider: ({
      nextSliderSelector,
    }) => {
      return new CarouselSlider({
        main: '.repair-types-slider',
        wrap: nextSliderSelector,
        prev: '#repair-types-arrow_left',
        next: '#repair-types-arrow_right',
        overflow: true,
        pagination: [{
          type: 'counter',
          wrap: '#repair-counter',
          current: '.slider-counter-content__current',
          total: '.slider-counter-content__total',
        }],
        slidesToShow: 1,
        infinity: true,
      });
    },
  });
  carouselSliderRepairTypesTabs.init();

  // подключение слайдера на кнопки видов ремонта на мобильных версиях
  const carouselSliderRepairTypesTabsButton = new CarouselSlider({
    main: '.repair-types-nav',
    wrap: '.nav-list-repair',
    prev: '#nav-arrow-repair-left_base',
    next: '#nav-arrow-repair-right_base',
    slidesToShow: 3,
    responsive: [{
        breackpoint: 768,
        slidesToShow: 2
      },
      {
        breackpoint: 575,
        slidesToShow: 1
      },
    ],
    maxBreakpoint: 1024,
  });
  carouselSliderRepairTypesTabsButton.init();

  // подключение слайдера на портфолио на декстопных экранах
  const carouselSliderPortfolio = new CarouselSlider({
    main: '.portfolio-slider',
    wrap: '.slider-wrapper__portfolio-slider',
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',
    slidesToShow: 3,
    overflow: true,
    responsive: [{
        breackpoint: 1024,
        slidesToShow: 2
      },
      {
        breackpoint: 900,
        slidesToShow: 1
      },
    ],
    minBreakpoint: 575,
  });
  carouselSliderPortfolio.init();

  // подключение слайдера на портфолио на мобильных экранах
  const carouselSliderPortfolioMobile = new CarouselSlider({
    main: '.portfolio-slider-mobile',
    wrap: '.slider-wrapper__portfolio-slider-mobile',
    prev: '#portfolio-arrow-mobile_left',
    next: '#portfolio-arrow-mobile_right',
    overflow: true,
    pagination: [{
      type: 'counter',
      wrap: '#portfolio-counter',
      current: '.slider-counter-content__current',
      total: '.slider-counter-content__total',
    }],
    slidesToShow: 1,
    infinity: true,
    maxBreakpoint: 574,
  });
  carouselSliderPortfolioMobile.init();

  // открытие модалки по клику на слайд портфолио
  openModal({
    modalWrapSelector: '.popup-portfolio',
    modalWindowSelector: '.popup-dialog-portfolio',
    openButtonsSelector: '.portfolio-slider__slide-frame',
    closeButtonSelector: '.close'
  });

  // запуск слайдера в модалке, передаём картинки как пагинацию, чтобы открыть сразу нужную, а описание листается вместе со слайдами
  const carouselSliderPortfolioModal = new CarouselSlider({
    main: '.popup-portfolio-slider-wrap',
    wrap: '.popup-portfolio-slider',
    prev: '#popup_portfolio_left',
    next: '#popup_portfolio_right',
    pagination: [{
        type: 'counter',
        wrap: '#popup-portfolio-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
      },
      {
        type: 'button',
        wrap: '.slider-wrapper__portfolio-slider',
        button: '.portfolio-slider__slide-frame',
        active: '.active',
      }
    ],
    description: {
      wrap: '.popup-dialog-portfolio',
      rows: '.popup-portfolio-text',
    },
    slidesToShow: 1,
    infinity: true,
  });
  carouselSliderPortfolioModal.init();

  // запускаем слайдер на документах в мобильных версиях
  const carouselSliderTransparency = new CarouselSlider({
    main: '.transparency-slider-wrap',
    wrap: '.transparency-slider',
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right',
    overflow: true,
    hideOverflow: true,
    slidesToShow: 1,
    maxBreakpoint: 1090,
  });
  carouselSliderTransparency.init();

  // модалка на документах
  openModal({
    modalWrapSelector: '.popup-transparency',
    modalWindowSelector: '.popup-dialog-transparency',
    openButtonsSelector: '.transparency-item__img',
    closeButtonSelector: '.close'
  });

  // слайдер в модалке документов, передаём договоры как пагинацию, чтобы открыть сразу нужный
  const carouselSliderTransparencyModal = new CarouselSlider({
    main: '.popup-transparency-slider',
    wrap: '.slider-wrapper__popup-transparency-slider',
    prev: '#transparency_left',
    next: '#transparency_right',
    slidesToShow: 1,
    overflow: true,
    pagination: [{
        type: 'counter',
        wrap: '#transparency-popup-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
      },
      {
        type: 'button',
        wrap: '.transparency-slider',
        button: '.transparency-item__img',
        active: '.active',
      }
    ],
  });
  carouselSliderTransparencyModal.init();

  // слайдер на мобильной версии крудочков с проблемами
  const carouselSliderProblems = new CarouselSlider({
    main: '.problems-slider-wrap',
    wrap: '.problems-slider',
    prev: '#problems-arrow_left',
    next: '#problems-arrow_right',
    slidesToShow: 1,
    slidesToHighlight: 1,
    highlightSelector: '.active-item',
    overflow: true,
    hideOverflow: true,

  });
  carouselSliderProblems.init();

  // активируем подсказки с проблемами
  hints({
    iconsSelector: '.problems-item__icon',
    iconsInnerSelector: '.problems-item__icon-inner',
    hintsSelector: '.problems-item-popup',
    mainWrapperSelector: '.row',
  });

  // запускаем слайдер с пагинацией кнопками и переключаем превьюшки как описание, слайдами являются слайдеры с картинками, у которых пагинация это - превьюшки
  const carouselSliderDesignTabs = new CarouselSlider({
    main: '.designs-slider',
    wrap: '.slider-wrapper__designs-slider',
    overflow: true,
    slidesToShow: 1,
    pagination: [{
      type: 'button',
      wrap: '#designs-list',
      active: '.active',
    }],
    description: {
      wrap: '#designs',
      rows: '.preview-block',
      active: '.visible',
    },
    sliderInSlider: ({
      nextSliderSelector,
    }) => {
      return new CarouselSlider({
        main: '.designs-slider',
        wrap: nextSliderSelector,
        prev: '#design_left',
        next: '#design_right',
        overflow: true,
        slidesToShow: 1,
        pagination: [{
            type: 'button',
            wrap: '.preview-block.visible',
            active: '.preview_active',
          },
          {
            type: 'counter',
            wrap: '#designs-counter',
            current: '.slider-counter-content__current',
            total: '.slider-counter-content__total',
          }
        ],
      });
    },
  });
  carouselSliderDesignTabs.init();

  // слайдер на кнопках дизайна в мобильной версии
  const carouselSliderDesignTabsButton = new CarouselSlider({
    main: '.nav-designs',
    wrap: '#designs-list',
    prev: '#nav-arrow-designs_left',
    next: '#nav-arrow-designs_right',
    slidesToShow: 3,
    responsive: [{
        breackpoint: 768,
        slidesToShow: 2
      },
      {
        breackpoint: 575,
        slidesToShow: 1
      },
    ],
    maxBreakpoint: 1024,
  });
  carouselSliderDesignTabsButton.init();

  // модалка с дизайнами
  openModal({
    modalWrapSelector: '.popup-design',
    modalWindowSelector: '.popup-dialog-design',
    openButtonsSelector: '#open-design-modal',
    closeButtonSelector: '.close'
  });

  // так же как и на странице слайдер с кнопками перелистывающий слайдер с картинками
  const carouselSliderDesignModal = new CarouselSlider({
    main: '.popup-design-slider',
    wrap: '.slider-wrapper__popup-design-slider',
    overflow: true,
    slidesToShow: 1,
    pagination: [{
      type: 'button',
      wrap: '#nav-list-popup-designs',
      active: '.active',
    }],
    description: {
      wrap: '.popup-design-tab__item',
      rows: '.popup-design-text',
      active: '.visible-content-block',
    },
    sliderInSlider: ({
      nextSliderSelector,
    }) => {
      return new CarouselSlider({
        main: '.popup-design-slider',
        wrap: nextSliderSelector,
        prev: '#popup_design_left',
        next: '#popup_design_right',
        overflow: true,
        slidesToShow: 1,
        pagination: [{
          type: 'counter',
          wrap: '#popup-designs-counter',
          current: '.slider-counter-content__current',
          total: '.slider-counter-content__total',
        }],
      });
    },
  });
  carouselSliderDesignModal.init();

  // модалка с консультацией
  openModal({
    modalWrapSelector: '.popup-consultation',
    modalWindowSelector: '.feedback-wrap',
    openButtonsSelector: '.consult-button',
    closeButtonSelector: '.close'
  });

  // слайдер с отзывами
  const carouselSliderReviews = new CarouselSlider({
    main: '.reviews-slider',
    wrap: '.slider-wrapper__reviews-slider',
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',
    slidesToShow: 1,
    overflow: true,
    hideOverflow: true,

  });
  carouselSliderReviews.init();

  // слайдер на схеме ведение проекта
  const carouselSliderScheme = new CarouselSlider({
    main: '.scheme-slider',
    wrap: '.slider-wrapper__scheme-slider',
    overflow: true,
    slidesToShow: 1,
    pagination: [{
      type: 'button',
      wrap: '#scheme-list',
      active: '.active',
    }],
    description: {
      wrap: '.scheme-slider-wrap',
      rows: '.scheme-description-block',
      active: '.visible-content-block',
    },
  });
  carouselSliderScheme.init();

  // слайдер партнёров
  const carouselSliderPartners = new CarouselSlider({
    main: '#partners',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
    infinity: true,
    slidesToShow: 3,
    responsive: [{
        breackpoint: 768,
        slidesToShow: 2
      },
      {
        breackpoint: 575,
        slidesToShow: 1
      },
    ],
    overflow: true,
    hideOverflow: true,
  });
  carouselSliderPartners.init();

  // красивенький аккордеон)
  accordion({
    wrapSelector: '.accordion',
    itemSelector: '.title_block',
    messageSelector: '.msg',
    activeSelector: '.msg-active'
  });

  // получаем и распихиываем данные полученные с базы в модалке со списком услуг, а затем через промис вешаем слайдер на кнопки, чтоб успели прогрузиться
  const filter = new Filter({
    checkBoxFieldSelector: '.nav-list-popup-repair',
    cardsWrapperSelector: '.popup-repair-types-content-table__list>tbody',
    urlDatabase: './db/db.json',
    titleSelector: '#switch-inner',
    dateSelector: '.popup-repair-types-content__head-date',
    searchKey: 'title',
  });
  filter.init().then(() => {
    const carouselSliderPricelistTabsButton = new CarouselSlider({
      main: '.nav-popup-repair-types',
      wrap: '.nav-list-popup-repair',
      prev: '#nav-arrow-popup-repair_left',
      next: '#nav-arrow-popup-repair_right',
      slidesToShow: 3,
      overflow: true,
      hideOverflow: true,
      responsive: [{
          breackpoint: 768,
          slidesToShow: 2
        },
        {
          breackpoint: 575,
          slidesToShow: 1
        },
      ],
      maxBreakpoint: 1024,
    });
    carouselSliderPricelistTabsButton.init();
  });

});