const phoneMask = () => {
  const inputFields = document.querySelectorAll('input[name="phone"]'),
    mask = '+7 (___) ___-__-__';

  const checkMask = event => {

    if (event.target.value) {
      let fillString = mask,
        cursorPosition = mask.indexOf('_');

      event.target.value = event.target.value.slice(mask.indexOf('_'));
      event.target.value = event.target.value.replace(/[^\d]/g, '');

      console.log(event.target.value);
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

  const setBegin = event => {
    if (!event.target.value) {
      event.target.value = mask;
      event.target.selectionStart = mask.indexOf('_');
      event.target.selectionEnd = mask.indexOf('_');
    }
  };

  inputFields.forEach(field => {
    field.addEventListener('input', checkMask);
    field.addEventListener('focus', setBegin);
  });



};

export default phoneMask;