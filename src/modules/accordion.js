const accordeon = ({
  wrapSelector,
  itemSelector,
  messageSelector,
  activeSelector
}) => {
  const wrap = document.querySelector(wrapSelector),
    items = [...wrap.querySelectorAll(itemSelector)],
    messages = [...wrap.querySelectorAll(messageSelector)];

  let prevIndex = 0;

  const closeAccordion = (index) => {
    items[index].classList.remove(activeSelector.slice(1));
  };

  const openAccordion = (index) => {
    items[index].classList.add(activeSelector.slice(1));
  }

  wrap.addEventListener('click', event => {
    items.forEach((item, index) => {
      if (item === event.target || item.contains(event.target)) {
        closeAccordion(prevIndex);
        if (prevIndex !== index) {
          openAccordion(index);
        }
        prevIndex = index;
      }
    });
  });
};

export default accordeon;