'use strict';

let x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

let y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// Add your explanation as a comment here
// f1 does not change the value of x because x is passed by value
// f2 changes the value of x because y (the container of property x) is passed by reference
