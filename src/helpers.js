export const rootCalc = (n, root) => {
  return Math.pow(n, 1 / root);
};

export const randomCircle = () => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dy: (Math.random() - 0.5) * 1,
    dx: (Math.random() - 0.5) * 1,
    r: Math.random() * 60 + 1, // add ranges for all
  };
};

export const multipleCircles = (n, constuct, colors) => {
  let arr = [];
  for (let i = 0; i < n; ++i) {
    const { x, y, dx, dy, r } = randomCircle();
    arr.push(new constuct(x, y, r, dx, dy, colors));
  }
  return arr;
};

export const randomColorRnage = (n, isTransparent) => {
  let arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push(
      `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${isTransparent ? 0.5 : 1}`
    );
  }
  return arr;
};

export const getMouseCordinates = (mouse) => {
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  return mouse;
};
