const scroll = () => {

  let positionControl = null,
    accelerate,
    direction = 0;

  const accelerateRatio = 0.6, // ускорение прокрутки от 0 до 1
    speed = 10; // скопрость прокрутки, больше - быстрее

  const paraboleByThreePointsY = (x1, y1, x2, y2, x3, y3, x, dx) => {
    const a = (y3 - (x3 * (y2 - y1) + x2 * y1 - x1 * y2) / (x2 - x1)) / (x3 * (x3 - x1 - x2) + x1 * x2),
      b = (y2 - y1) / (x2 - x1) - a * (x1 + x2),
      c = (x2 * y1 - x1 * y2) / (x2 - x1) + a * x1 * x2;
    // console.log(x1, y1, x2, y2, x3, y3, x, dx, a * x * x + b * x + c);
    return a * x * x + b * x + c + dx;
  };

  const smoothScroll = (scrollFrom, scrollTo) => {
    const position = document.documentElement.scrollTop;

    document.documentElement.scrollTop = position + direction * paraboleByThreePointsY(Math.min(scrollFrom, scrollTo), 0, Math.abs(Math.max(scrollFrom, scrollTo) - Math.min(scrollFrom, scrollTo)) / 2, accelerate, Math.max(scrollFrom, scrollTo), 0, position, speed);
    console.log(scrollFrom, scrollTo);
    if (positionControl !== position) {
      requestAnimationFrame(() => {
        smoothScroll(scrollFrom, scrollTo);
      });
    }
    positionControl = position;
  };

  document.addEventListener('click', event => {
    let link = event.target.closest('a');

    if (link) {
      link = link.getAttribute('href');
      if (link[0] === '#' &&
        link !== '#close' && link.length > 1) {
        event.preventDefault();

        const positionY = document.querySelector(link).offsetTop,
          startPoint = document.documentElement.scrollTop;

        positionControl = null;

        accelerate = Math.pow(Math.max(positionY, startPoint) - Math.min(positionY, startPoint), accelerateRatio);

        if (positionY >= startPoint) {
          direction = 1;
        } else {
          direction = -1;
        }
        smoothScroll(startPoint, positionY);

      }
    }

  });

};

export default scroll;