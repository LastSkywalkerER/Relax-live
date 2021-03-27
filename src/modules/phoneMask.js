const phoneMask = (mask) => {
  const inputFields = document.querySelectorAll('input[name="phone"]');

  // рисуем маску, вводим только числа и не даём ничего другого
  const checkMask = event => {

    if (event.target.value) {
      let fillString = mask,
        cursorPosition = mask.indexOf('_');

      event.target.value = event.target.value.slice(mask.indexOf('_'));
      event.target.value = event.target.value.replace(/[^\d]/g, '');

      event.target.value.split('').forEach(char => {
        fillString = fillString.replace(/_/, (match, offset) => {
          cursorPosition = offset + 1;
          return char;
        });
      });

      event.target.value = fillString;

      event.target.selectionStart = cursorPosition;
      event.target.selectionEnd = cursorPosition;

    }
  };

  // показываем начальную маску
  const setBegin = event => {
    if (!event.target.value) {
      event.target.value = mask;
      event.target.selectionStart = mask.indexOf('_');
      event.target.selectionEnd = mask.indexOf('_');
    }
  };

  // если ничего не вводили очищаем поле
  const clearIfEmpty = event => {
    if (event.target.value === mask) {
      event.target.value = '';
    }
  }

  // вешаем маску на все поля с номерами
  inputFields.forEach(field => {
    field.addEventListener('input', checkMask);
    field.addEventListener('focus', setBegin);
    field.addEventListener('blur', clearIfEmpty);
  });



};

export default phoneMask;