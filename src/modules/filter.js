// объек  для фильтрации и отрисовки карт
class Filter {

  // получение инфы по странице с картами и предварительная отрисовка из базы
  constructor({
    checkBoxFieldSelector,
    cardsWrapperSelector,
    urlDatabase,
    cardSelector,
    nameCardSelector,
    titleSelector,
    dateSelector,
  }) {
    this.select = document.querySelector(checkBoxFieldSelector);
    this.cardsWrapper = document.querySelector(cardsWrapperSelector);
    this.urlDataBase = urlDatabase;
    this.cardSelector = cardSelector;
    this.nameCardSelector = nameCardSelector;
    this.title = document.querySelector(titleSelector);
    this.date = document.querySelector(dateSelector);
  }

  // очищаем ключ и получаем все карты и свойства
  init() {
    this.searchKey = 'title';
    this.selectedKeys = [];

    this.getData(this.urlDataBase, data => {
      this.renderCheckbox(this.getValues(data, this.searchKey));
    });
    this.listeners();
  }

  // очищаем фильтр и получаем все карты
  update() {
    this.selectedKeys = [];

    this.getData(this.urlDataBase, data => {
      this.renderCards(data);
    });
  }

  // запрос на получение карт с сервера или хранилища если есть
  getData(url, cb) {
    if (localStorage.getItem('data')) {
      cb(JSON.parse(localStorage.getItem('data')));
    } else {
      return fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      }).then(response => response.json()).then(data => {
        cb(data);
        localStorage.setItem('data', JSON.stringify(data));
      });

    }
  }

  // полчаем все ключи карт без повторений
  getOptions(heroes) {
    const values = new Set();

    heroes.forEach(hero => Object.keys(hero).forEach(option => {
      if (option !== 'photo') {
        values.add(option);
      }
    }));

    return values;
  }

  // получение всей информации из объектов по ключу без повторений
  getValues(heroes, key) {
    const values = new Set();
    heroes.forEach(item => {
      let arrOfHeroesWithKey = this.projection(key, item)[key];
      if (typeof arrOfHeroesWithKey !== 'string') {
        if (arrOfHeroesWithKey) {
          arrOfHeroesWithKey.forEach(item => {
            values.add(item);
          });
        }
      } else {
        if (arrOfHeroesWithKey) {
          if (arrOfHeroesWithKey.split(' ').length === 1) {
            arrOfHeroesWithKey = arrOfHeroesWithKey.slice(0, 1).toUpperCase() + arrOfHeroesWithKey.slice(1).toLowerCase();
          }
          values.add(arrOfHeroesWithKey);
        }
      }
    });

    return values;
  }

  // фильтрация информации из объектов по ключу
  projection(fields, obj) {
    return Object.keys(obj).filter(field => fields.includes(field)).reduce((mewObj, key) => {
      mewObj[key] = obj[key];
      return mewObj;
    }, {});
  }

  // отрисовка чекбоксов для фильтрации по имеющимуся набору информации
  renderCheckbox(checkNames) {
    this.select.textContent = '';
    let beginKey = 0;
    checkNames.forEach((item) => {
      const box = document.createElement('button');

      if (beginKey === 0) {
        beginKey = item;
      }

      box.classList.add('button_o');
      box.classList.add('popup-repair-types-nav__item');
      box.innerHTML = `
        ${item}
      `;
      this.select.append(box);
    });

    this.buttons = [...this.select.querySelectorAll('.popup-repair-types-nav__item')];
    this.initRender(beginKey);
  }

  // отрисовка переданных карт
  renderCards(card) {
    this.cardsWrapper.textContent = '';

    card.priceList.forEach(cardData => {
      const card = document.createElement('tr');
      card.classList.add('mobile-row');
      card.innerHTML = `
        <td class="repair-types-name">
          ${cardData.typeService}
        </td>
        <td class="mobile-col-title tablet-hide desktop-hide">
          Ед.измерения
        </td>
        <td class="mobile-col-title tablet-hide desktop-hide">
          Цена за ед.
        </td>
        <td class="repair-types-value">${cardData.units[0]}<sup>${cardData.units[1]}</sup></td>
        <td class="repair-types-value">${cardData.cost} руб.</td>
      `;

      this.cardsWrapper.append(card);
    });
  }

  // перерисовка карт по фильтру и ключу
  reDrowWithFilter(filter, key) {
    this.getData(this.urlDataBase, data => {
      let filteredData = {};

      data.forEach(obj => {
        if (obj.date) {
          this.date.innerHTML = `${obj.date} <i><i></i></i>`;
        }
        if (obj[key] === filter) {
          filteredData = obj;
        }
      });

      if (filteredData) {
        this.renderCards(filteredData);
      } else {
        const emptyObj = [{
          title: 'Ничего не найдено',
        }];
        this.renderCards(emptyObj);

      }
    });
  }

  initRender(key) {
    this.title.textContent = key;
    this.reDrowWithFilter(key, this.searchKey);

  }

  // добавление прослушки на чекбоксы и карты
  listeners() {

    this.select.addEventListener('click', event => {
      if (event.target.tagName.toLowerCase() === 'button') {
        this.initRender(event.target.textContent.trim());

        this.buttons.forEach(buton => {
          buton.classList.remove('active');
          if (buton === event.target) {
            buton.classList.add('active');
          }
        })
      }
    });

    this.cardsWrapper.addEventListener('click', event => {
      const card = event.target.closest(this.cardSelector),
        deletectn = event.target.closest('.delete'),
        name = card.querySelector(this.nameCardSelector).textContent;
      if (deletectn) {
        this.getData(this.urlDataBase, (data) => {
          data = data.filter(hero => hero.name !== name);
          addCards.sendJson(data);
          this.init();
        });

        return;
      }
      if (card) {

        window.location.href = `https://yandex.by/search/?lr=157&oprnd=6064670731&text=${name} marvel`;
      }
    });
  }
}

export default Filter;