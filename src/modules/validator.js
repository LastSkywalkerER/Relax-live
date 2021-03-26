/* eslint-disable eol-last */
/* eslint-disable max-len */

class Validator {
  constructor({
    form,
    selector,
    pattern = {},
    method
  }) {
    if (form) {
      this.form = form;
    } else if (selector) {
      this.form = document.querySelector(selector);
    }
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
    this.submitBtn = [...this.form.querySelectorAll('button')].reduce((accumulator, currentValue) => {
      if (currentValue.type === 'submit') {
        return currentValue;
      }
    });
    this.error = new Set();
    this.form.setAttribute('novalidate', '');
    this.submitBtn.setAttribute('disabled', '');
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('input', this.checkIt.bind(this)));
    this.form.addEventListener('submit', e => {
      this.elementsForm.forEach(elem => this.checkIt({
        target: elem
      }));
      e.preventDefault();

      if (this.error.size) {
        this.submitBtn.setAttribute('disabled', '');
      }
    });
  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return validatorMethod.notEmpty(elem) ? pattern.test(elem.value) : true;
      }
    };

    if (this.method) {
      const method = this.method[elem.name];
      if (method) {

        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      }
    }

    return true;
  }

  checkIt(event) {
    this.elementsForm.forEach(target => {
      if (this.isValid(target)) {
        this.showSuccess(target);
        this.error.delete(target);
        if (!this.error.size) {
          this.form.querySelector('button').removeAttribute('disabled', '');
        }
      } else {
        this.showError(target);
        this.error.add(target);
        if (this.error.size) {
          this.form.querySelector('button').setAttribute('disabled', '');
        }
      }
    });
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Некорректные данные';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border: 2 px solid green !important;
      }
      input.error {
        border: 2 px solid red !important;
      }
      .validator-error {
        color: red;
        position: absolute;
        top: 5px;
        transform: translateY(-100%);
        padding: 10px;
        background: white;
        border-radius: 10px;

      }
    `;

    document.head.append(style);
  }

  setPattern() {
    if (!this.pattern.phone) {
      this.pattern.phone = /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/;
    }
    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }
    if (!this.pattern.name) {
      this.pattern.name = /^[а-я- ]{2,}$/i;
    }
  }
}

export default Validator;