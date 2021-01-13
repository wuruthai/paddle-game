var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const PADDLE_WIDTH = 40;
const PADDLE_HEIGHT = 5;
const PADDLE_BOTTOM_GAP = 0;
const SPEED = 4;
const BALL_RADIUS = 5;
const direction = {
  x: +1,
  y: -1,
};
const paddle = {
  x: (canvas.width - PADDLE_WIDTH) / 2,
  y: canvas.height - PADDLE_HEIGHT - PADDLE_BOTTOM_GAP,
};

const ball = {
  x: paddle.x + PADDLE_WIDTH / 2,
  y: paddle.y - PADDLE_HEIGHT - BALL_RADIUS / 2,
};

const calculateDistance = (dx = 0, dy = 0) => {
  return Math.sqrt(dx * dx + dy * dy);
};
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = "tomato";
  ctx.fill();
  ctx.closePath();
};

const findCollusion = () => {
  if (
    calculateDistance(canvas.width - ball.x, 0) <= BALL_RADIUS ||
    calculateDistance(0 - ball.x, 0) <= BALL_RADIUS
  ) {
    // RIGHT - LEFT WALL COLLUSION
    direction.x = -direction.x;
  } else if (calculateDistance(0, ball.y) <= BALL_RADIUS) {
    // TOP COLLUSION
    direction.y = -direction.y;
  } else if (calculateDistance(0, canvas.height - ball.y < BALL_RADIUS)) {
    // GAME OVER
    direction.y = -direction.y;
  }
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
};

const ballMovement = () => {
  ball.x += SPEED * direction.x;
  ball.y += SPEED * direction.y;
};

setInterval(() => {
  ballMovement()
  findCollusion();
  draw();
}, 10);
