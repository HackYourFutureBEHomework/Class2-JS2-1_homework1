
************level (1)**************
// ---- You cannot modify these lines
let stepsDown = 3;
let stepsLeft = 0;
// ++++

// Change the variables here.
let stepsDown = 2;
let stepsLeft = 1;
// ---- You cannot modify these lines
for (let i = 0; i < stepsDown; i++) {
  move();
}
turn('right');
for (let i = 0; i < stepsLeft; i++) {
  move()
}
// ++++
************level (2)**************
// Declare your variables here:
const stepsUp = 3;
const stepsRight = 3;
// ---- You cannot modify these lines

for (let i = 0; i < stepsUp; i++) {
  move();
}
turn('right');
for (let i = 0; i < stepsRight; i++) {
  move();
}

// ++++
************level (3)**************
move();
const key = pickUp();
move();
turn("right");
unlock(key);
move();
move();
move();
************level (4)**************
move();
const key = pickUp();
move();
turn("right");
unlock(2*key);
move();
move();
move();
************level (5)**************
move();
const key = pickUp();
move();
turn("right");
unlock(-key);
move();
move();
move();
************level (6)**************

move();
const key = pickUp();
move();
turn("right");
unlock(Math.cbrt(key));
move();
unlock(key<6);
move();
move();

************level (7)**************
move();
const key = pickUp();
move();
turn("right");
unlock(key+","+key);
move();
unlock(key.length);
move();
move();
