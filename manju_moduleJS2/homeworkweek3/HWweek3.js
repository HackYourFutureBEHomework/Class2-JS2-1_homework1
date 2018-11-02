'use strict';

//write a function that takes another function as an argument and runs it.

function foo(func) {
    console.log(func() + " " + "and i am called from foo");
  };
   
function bar() {
    return 'Hello, Im in bar';
  };

  foo(bar);


/*//3.2 write a function that takes 4 arguments.

function sayThree() {
    number = 3;
  return number
};
function sayFive() {
    number = 5;
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
console.log(threeFive(10, 20, sayThree, sayFive));*/


//3.3 Please solve this problem: "https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string"//#endregion
//3.3.1: with a for loop.

function repeatStringNumTimes(str, num) {

  var repeatedString = ""
  for (let i = 0; i < num; i++){
    repeatedString += str; 

  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

//3.3.2: with a while loop.

function repeatStringNumTimes(str, num) {

  var repeatedString = ""
  while (num > 0){
    repeatedString += str;
    num --
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

//3.3.3: with a do...while loop.

function repeatStringNumTimes(str, num) {
  
  var repeatedString = ""
  var i = 0
  if (num >= 0){
  do {
    repeatedString += str;
    i++;
  }
  while (i < num); 
  }
  return repeatedString; 
}

//3.4 Some practice with objects: 

//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function 
//Object Oriented Programming: Define a Constructor Function

function Dog (){
  this.name = "Albert";
  this.color = "brown";
  this.numLegs = 4;
}


//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
//Use a Constructor to Create Objects

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

//3.5 Nested loops
//https://www.freecodecamp.com/challenges/nesting-for-loops

function multiplyAll(arr) {
  var product = 1;
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      //console.log(arr[i][j]);
      product = product * arr[i][j];
    }
  }
  return product;
} 
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

//3.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

//explanation : variable is passed by value means we are working with copy of variable value and chaned it with in function and outside funtion the variable value at memory addess is same as before i.e 9 in this case  

const x = 9; 
function f1(val) {
  val = val + 1;
  return val;
  
}

//explanation : here the variable is passed by refference so we are passing address of varible and at that address we are changing value of variable this time value of varible is changed we direclty acssing value at memory address 

f1(x);
console.log(x);

const y = { x: 9 }; 
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//step 4: Write a function that would allow you to do this:
//const addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27

function addSix(n) {
  return function CreateBase(num){
      return n+num
  }
}

var add = addSix(15)
add(10);

//Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!

let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let newarr = [];
let len = arr.length;
console.log(len);
for (let i = 0; i < len; i++){
   if (newarr.indexOf(arr[i]) === -1){
       newarr.push(arr[i]);
   }
}
console.log('new array after removing duplicates' +newarr);