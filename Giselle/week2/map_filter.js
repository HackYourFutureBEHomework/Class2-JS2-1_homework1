'use strict';

const numbers = [1, 2, 3, 4];
//const newNumbers = [];

/*
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}
*/

let odds = numbers.filter(n => n % 2);

const doubles = odds.map(x => x * 2);

document.writeln("The original numbers are: " + numbers + "<br>");
document.writeln("The odds numbers are: " + odds + "<br>");
document.writeln("The doubled numbers are: " + doubles + "<br>");

