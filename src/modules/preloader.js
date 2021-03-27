class Preloader {
  constructor() {

  }

  // запуск прелоадера
  start() {
    this.setStyle();
    this.createLoading();
  }
  // остановка прелоадера
  stop() {
    this.statusMessage.remove();
    this.statusMessageStyle.remove();
  }

  // создание обхекта прелоадера
  createLoading() {
    this.statusMessage = document.createElement('div');
    this.statusMessage.classList.add('preloading-wrap');
    this.statusMessage.innerHTML = `
      <div class="sk-wave-preloader">
        <div class='sk-rect-preloader sk-rect-preloader-2'></div> 
        <div class='sk-rect-preloader sk-rect-preloader-3'></div> 
        <div class='sk-rect-preloader sk-rect-preloader-4'></div> 
        <div class='sk-rect-preloader sk-rect-preloader-1'></div> 
        <div class='sk-rect-preloader sk-rect-preloader-5'></div>
      </div>
      `;
    document.body.insertAdjacentElement('beforeend', this.statusMessage);
  }

  // установка стилей
  setStyle() {
    this.statusMessageStyle = document.createElement('style');
    this.statusMessageStyle.textContent = `
  .preloading-wrap::parent {
    position: relative;
  }

  .preloading-wrap {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 999;
  }

  .sk-wave-preloader {
    width: 6em;
    height: 4em;
    margin: auto;
    text-align: center;
    font-size: 1em;
  }

  .sk-wave-preloader .sk-rect-preloader {
    background-color: #ffb015;
    height: 100%;
    width: 0.5em;
    display: inline-block;
    animation: sk-wave-preloader-stretch-delay 1.2s infinite ease-in-out;
  }

  .sk-wave-preloader .sk-rect-preloader-1 {
    animation-delay: -1.2s;
  }

  .sk-wave-preloader .sk-rect-preloader-2 {
    animation-delay: -1.1s;
  }

  .sk-wave-preloader .sk-rect-preloader-3 {
    animation-delay: -1s;
  }

  .sk-wave-preloader .sk-rect-preloader-4 {
    animation-delay: -0.9s;
  }

  .sk-wave-preloader .sk-rect-preloader-5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-wave-preloader-stretch-delay {
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
    document.head.append(this.statusMessageStyle);
  }
}

// сразу запускаем прелоадер
const preloader = new Preloader();
preloader.start();

// останавливаем после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  preloader.stop();
});