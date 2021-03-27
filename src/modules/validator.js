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
    this.hideButton = document.createElement('div');
    this.buttonWrap = document.createElement('div');
    this.buttonWrap.classList.add('validator-disabled');
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.disableButton();
    this.elementsForm.forEach(elem => elem.addEventListener('input', () => {
      this.elementsForm.forEach(target => {
        if (this.isValid(target)) {
          this.error.delete(target);
          if (!this.error.size) {
            this.enableButton();
          }
        } else {
          this.error.add(target);
          if (this.error.size) {
            this.disableButton();
          }
        }
      });
    }));
    this.form.addEventListener('click', event => {
      if (event.target === this.hideButton) {
        this.checkIt();
      } else {
        this.elementsForm.forEach(target => {
          this.showSuccess(target);
        });
      }
    });
    this.form.addEventListener('submit', e => {
      this.elementsForm.forEach(elem => this.checkIt({
        target: elem
      }));
      e.preventDefault();

      if (this.error.size) {
        this.disableButton();
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

    if (elem.type === 'checkbox') {
      if (elem.checked) {
        return true;
      } else {
        return false;
      }
    }
    if (this.method) {
      const method = this.method[elem.name];
      if (method) {

        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      }
    }

    return true;
  }

  disableButton() {
    this.submitBtn.setAttribute('disabled', '');
    this.submitBtn.classList.add('disabled');
    this.submitBtn.insertAdjacentElement('afterend', this.buttonWrap);
    this.buttonWrap.append(this.submitBtn);
    this.buttonWrap.append(this.hideButton);
  }

  enableButton() {
    this.submitBtn.removeAttribute('disabled', '');
    this.submitBtn.classList.remove('disabled');
    this.buttonWrap.insertAdjacentElement('afterend', this.submitBtn);
    this.hideButton.remove();
    this.buttonWrap.remove();
  }

  checkIt(event) {
    this.elementsForm.forEach(target => {
      if (this.isValid(target)) {
        this.showSuccess(target);
        this.error.delete(target);
        if (!this.error.size) {
          this.enableButton();
        }
      } else {
        this.showError(target);
        this.error.add(target);
        if (this.error.size) {
          this.disableButton();
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
        border: 2 px solid #7ce319 !important;
        color: #7ce319 !important;
      }
      input.error {
        border: 2 px solid #E32636 !important;
        color: #E32636 !important;
      }
      .validator-error {
        color: #E32636;
        position: absolute;
        top: 0;
        transform: translateY(-75%);
        padding: 10px;
        background: white;
        border-radius: 10px;

      }
      .validator-disabled {
        position: relative;
      }
      
      .validator-disabled > div {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
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