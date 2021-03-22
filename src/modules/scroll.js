const scroll = () => {

  let positionControl = null,
    speed = 10, // скопрость прокрутки, больше - быстрее
    accelerate;

  const accelerateRatio = 0.5; // ускорение прокрутки от 0 до 1

  const paraboleByThreePointsY = (x1, y1, x2, y2, x3, y3, x, dx) => {
    const a = (y3 - (x3 * (y2 - y1) + x2 * y1 - x1 * y2) / (x2 - x1)) / (x3 * (x3 - x1 - x2) + x1 * x2),
      b = (y2 - y1) / (x2 - x1) - a * (x1 + x2),
      c = (x2 * y1 - x1 * y2) / (x2 - x1) + a * x1 * x2;

    console.log(x1, y1, x2, y2, x3, y3, x, dx);

    return a * x * x + b * x + c + dx;
  };

  const smoothScroll = scrollTo => {
    const positionY = document.querySelector(scrollTo).offsetTop,
      position = document.documentElement.scrollTop;

    document.documentElement.scrollTop = position + paraboleByThreePointsY(Math.min(0, positionY), 0, positionY / 2, accelerate, Math.max(0, positionY), 0, position, speed);

    if (positionControl !== position) {
      requestAnimationFrame(() => {
        smoothScroll(scrollTo);
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

        const positionY = document.querySelector(link).offsetTop,
          startPoint = document.documentElement.scrollTop;

        positionControl = null;

        accelerate = Math.pow(Math.max(positionY, startPoint) - Math.min(positionY, startPoint), accelerateRatio);

        if (positionY >= startPoint) {
          speed = Math.abs(speed);
        } else {
          speed = -Math.abs(speed);
        }

        event.preventDefault();
        smoothScroll(link);

      }
    }

  });

};

export default scroll;