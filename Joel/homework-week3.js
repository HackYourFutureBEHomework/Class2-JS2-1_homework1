//3.1 Your task is to write a function that takes another function as an argument and runs it.

function weather(input) {
  console.log(input() + " " + "and is cold!");
};
 
function country() {
  return 'Hello, Im in Belgium';
};

weather(country);


//3.2 You must write a function that takes 4 arguments.

function sayThree() {
  return number
};

function sayFive() {
  return number
};

function threeFive(startValue, stopValue, threeCallback, fiveCallback) {
  const values = [];
    for (let i = startValue; i <= stopValue; i++ ) {
      values.push[i];
    }
    values.forEach(function(number) {
    if(number % 3 === 0 ) {
      sayThree();
      }
      if(number % 5 === 0 ) {
      sayFive();
    }
  }
)};

console.log(threeFive(10, 20, sayThree, sayFive));


//3.3 DONE Please solve this problem:

//For loop
function repeatStringNumTimes(str, num) {
  let longString = '';
  for (num = 0; num > 0; i++) {
    longString += str;
    return longString;
  };
};
console.log(repeatStringNumTimes("Lets Code!", 3));

//While Loop
function repeatStringNumTimes(str, num) {
  let longString = '';
  while (num > 0) {
    longString += str;
    num--;
  };
  return longString;
}; 
console.log(repeatStringNumTimes("Lets Code!", 3));

//Do-while loop

function repeatStringNumTimes(str, num) {
  let longString = '';
  do {
    longString += str
    num--;
    }
  while (num > 0) ;
  return longString;
};
console.log(repeatStringNumTimes("Lets Code!", 3))


/* DONE. 3.4 
a) Create a constructor, Dog, with properties name, color, 
and numLegs that are set to a string, a string, and a number, respectively*/

function Dog () {
    this.name = "Gold";
    this.color = "yellow";
    this.numLegs = 4;
};

/* 
b) DONE. Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound. */

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
};
let hound = new Dog();


//DONE 3.5 Nested loops (https://www.freecodecamp.com/challenges/nesting-for-loops)

function multiplyAll(arr) {
  let product = 1;
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    product = product * arr[i][j];
    }
  }
  return product;
};
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


/*DONE. 3.7 Here are two functions that look like they do the something similar 
but they print different results. Please explain what's going on here.*/

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
};
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*ANSWER: The first function is passing by value and the second by reference. When passing by, value different  
places in the memory are reserved for a variable and the same variable if its reasigned to a different 
value. When passing by reference the same place in the memory is reserved. This difference can produce 
very different results */