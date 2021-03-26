const accordeon = ({
  wrapSelector,
  itemSelector,
  messageSelector,
  activeSelector
}) => {
  const wrap = document.querySelector(wrapSelector),
    items = [...wrap.querySelectorAll(itemSelector)],
    messages = [...wrap.querySelectorAll(messageSelector)];

  let prevIndex = 0,
    isOpen = 1;

  const closeAccordion = (index) => {
    items[index].classList.remove(activeSelector.slice(1));
    isOpen = 0;
  };

  const openAccordion = (index) => {
    items[index].classList.add(activeSelector.slice(1));
    isOpen = 1;
  };

  wrap.addEventListener('click', event => {
    items.forEach((item, index) => {
      if (item === event.target || item.contains(event.target)) {
        console.log(isOpen);
        if (prevIndex !== index) {
          closeAccordion(prevIndex);
          openAccordion(index);
        } else {
          if (isOpen) {
            closeAccordion(prevIndex);
          } else {
            openAccordion(index);
          }
        }
        prevIndex = index;
      }

    });
  });
};

export default accordeon;