import { getMouseCordinates } from "./helpers";

/**
 * would be better to make this class the parent class
 * to extend from it Ball and Ring classes
 * each with it's {draw} methid
 *
 * Since I didn't plan using classes from the beginning
 * will put everyting on 1 class
 *
 * Would be fun the separate conditions for example
 * Going up and going down functionality in abstract {move} function
 *
 * And would also be nice to add {isColorInteractive} to class
 * on creating
 */

export function Circle(x, y, initialRadius, dx, dy, colors) {
  this.id = `id: ${Math.floor(Math.random() * 2)}`;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.initialRadius = initialRadius;
  this.radius = initialRadius;
  this.color = colors[Math.floor(Math.random() * 5)];

  this.draw = function (ctx, isColorInteractive, isfill) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const color = isColorInteractive
      ? colors[Math.floor(Math.random() * 5)]
      : this.color;
    if (isfill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.strokeStyle = ctx.stroke();
    }

    ctx.closePath();
  };

  this.update = function (ctx, mouse, isColorInteractive) {
    const isMouseInteractive = mouse.x && mouse.y;

    if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > ctx.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (isMouseInteractive) {
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < 70) {
          this.radius += 1;
        }
      } else if (this.radius > 2) {
        this.radius -= 1;
      }
    }

    if (!isMouseInteractive && this.radius !== this.initialRadius) {
      if (this.radius > this.initialRadius) {
        this.radius -= 1;
      }
      if (this.radius < this.initialRadius) {
        this.radius += 1;
      }
    }

    this.draw(ctx, isColorInteractive);
    ctx.closePath();
  };
}

export function Ball(x, y, initialRadius, dx, dy, colors) {
  this.id = `id: ${Math.floor(Math.random() * 2)}`;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.initialRadius = initialRadius;
  this.radius = initialRadius;
  this.color = colors[Math.floor(Math.random() * 5)];

  this.draw = function (ctx, isColorInteractive, isfill) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const color = isColorInteractive
      ? colors[Math.floor(Math.random() * 5)]
      : this.color;
    if (isfill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.strokeStyle = ctx.stroke();
    }
  };

  this.update = function (ctx) {
    if (this.y + this.radius > ctx.canvas.height) {
      this.dy = -this.dy * 0.8;
    } else {
      this.dy += 1;
    }

    if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.y += this.dy;
    this.x += this.dx;

    this.draw(ctx, false, true);
  };
}
