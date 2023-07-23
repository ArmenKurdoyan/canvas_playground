import { multipleCircles, randomColorRnage } from "./helpers";
import { mouse } from "./globals";
import { Circle, Ball } from "./Classes";

export const drawLoading = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};

export const drawTriangle = ({ ctx }) => {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
};

export const drawSmile = ({ ctx }) => {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);

  ctx.stroke();
};

export const drawArcs = ({ ctx }) => {
  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 3; ++j) {
      ctx.beginPath();
      const x = 25 + j * 50;
      const y = 25 + i * 50;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
};

export const drawQuadratic = ({ ctx }) => {
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 60, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
};

export const drawBezier = ({ ctx }) => {
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.stroke();
};

export const drawCourse = ({ ctx }) => {
  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
  ctx.fillRect(50, 50, 40, 40);
  ctx.fillStyle = "blue";
  ctx.fillRect(130, 130, 20, 20);

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(130, 130);
  ctx.strokeStyle = "red";
  ctx.stroke();

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.stroke();
};

// make everything TS

/**
 * This should be moves to stateManager,
 * too lazy rn
 */
const colors = randomColorRnage(255); // the best is 5 | 255
const circleArray = multipleCircles(1200, Circle, colors); // the best is 1200

export const drawCircle = ({
  ctx,
  showPattern,
  isMouseInteractive,
  isColorInteractive,
}) => {
  if (!showPattern) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  circleArray.forEach((element) => {
    element.update(
      ctx,
      { ...(isMouseInteractive && mouse) },
      isColorInteractive,
      mouse
    );
  });
};

const ballArray = multipleCircles(1200, Ball, colors); // the best is 1200

export const drawBall = ({ ctx, showPattern }) => {
  if (!showPattern) {
    // could've extract this in a wrapper renderer to no repeat
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  ballArray.forEach((element) => {
    element.update(ctx);
  });
};

export const drawCollapsibleExample = ({ ctx, showPattern }) => {
  if (!showPattern) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
};
