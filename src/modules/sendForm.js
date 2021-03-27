const sendForm = ({
  errorMessage,
  successMesage,
  successPopup,
  formsSelector,
  validator,
}) => {

  const forms = [...document.querySelectorAll(formsSelector)];
  const statusMessage = document.createElement('div');

  // стилизуем окошко анимации отправки формы
  const setStyle = () => {
    const statusMessageStyle = document.createElement('style');
    statusMessageStyle.textContent = `
  .loading-wrap::parent {
    position: relative;
  }

  .loading-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    color: black;
    padding: 20px;
    box-shadow: 0 0 50px 1px gray;
  }

  .sk-wave {
    width: 6em;
    height: 4em;
    margin: auto;
    text-align: center;
    font-size: 1em;
  }

  .sk-wave .sk-rect {
    background-color: #ffb015;
    height: 100%;
    width: 0.5em;
    display: inline-block;
    animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
  }

  .sk-wave .sk-rect-1 {
    animation-delay: -1.2s;
  }

  .sk-wave .sk-rect-2 {
    animation-delay: -1.1s;
  }

  .sk-wave .sk-rect-3 {
    animation-delay: -1s;
  }

  .sk-wave .sk-rect-4 {
    animation-delay: -0.9s;
  }

  .sk-wave .sk-rect-5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-wave-stretch-delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }

    20% {
      transform: scaleY(1);
    }
  }
  `;
    document.head.append(statusMessageStyle);
  };

  // отправка данных на сервер
  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body),
  });

  // формируем данные для отправки и выводим соответсвующее сообщение с результатом отправки
  const formPostAction = (event, form) => {
    event.preventDefault();

    const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'submit');
    const submitBtn = [...form.elements].filter(currentValue => {
      if (currentValue.type === 'submit' || currentValue.tagName.toLowerCase() === 'button') {
        return true;
      }
    })[0];

    const formData = new Map();
    elementsForm.forEach(item => {
      if (item.type !== 'checkbox') {
        formData.set(item.name, item.value);
      }
    });
    const body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    // submitBtn.setAttribute('disabled', '');
    elementsForm.forEach(item => {
      if (item.type === 'text') {
        item.value = '';
      } else if (item.type === 'checkbox') {
        item.checked = false;
      }
    });

    statusMessage.classList.add('loading-wrap');
    statusMessage.innerHTML = `
      <div class="sk-wave">
        <div class='sk-rect sk-rect-2'></div> 
        <div class='sk-rect sk-rect-3'></div> 
        <div class='sk-rect sk-rect-4'></div> 
        <div class='sk-rect sk-rect-1'></div> 
        <div class='sk-rect sk-rect-5'></div>
      </div>
      `;
    form.insertAdjacentElement('beforeend', statusMessage);

    postData(body).then(request => {
      if (request.status === 200) {
        if (successMesage) {
          statusMessage.textContent = successMesage;
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        } else if (successPopup) {
          statusMessage.remove();
          successPopup();
        }
      } else {
        throw new Error(`Exception status ${request.status}`);
      }
    }).catch(error => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    });
  };

  // вешаем валидатор и отпарвку на каждую форму
  forms.forEach(form => {
    if (validator) {
      validator(form);
    }
    form.addEventListener('submit', event => {
      formPostAction(event, form);
    });
  });

  setStyle();
};

export default sendForm;