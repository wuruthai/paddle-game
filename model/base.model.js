class BaseModel {
  constructor({ context, x, y, width, height, color, shape }) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = shape;
  }
  draw() {
    this.context.beginPath();
    this.context.arc(x, y, 10, 0,Math.PI);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }
}
