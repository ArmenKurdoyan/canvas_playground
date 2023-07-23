window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const mouse = {
  x: undefined,
  y: undefined,
};

export { mouse };
