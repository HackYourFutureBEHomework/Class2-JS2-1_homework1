'use strict';

const numbers = [1, 2, 3, 4];

function myFunction(number) {
  const filterNumber = numbers.filter((val) => val % 2 !== 0);
  const newNumbers = filterNumber.map((double) => double * 2);
  
  alert(newNumbers);             // i used alert just for popup
  //console.log(newNumbers);
  return newNumbers;
}
myFunction();

// second part of homework-----------Write a program that computes how much Maartje has earned----------

const monday = [
  {name: 'Write a summary HTML/CSS', duration: 180},
  {name: 'Some web development', duration: 120},
  {name: 'Fix homework for class10', duration: 20},
  {name: 'Talk to a lot of people', duration: 200}
];

const tuesday = [
  {name: 'Keep writing summary', duration: 240},
  {name: 'Some more web development', duration: 180},
  {name: 'Staring out the window', duration: 10},
  {name: 'Talk to a lot of people', duration: 200},
  {name: 'Look at application assignments new students', duration: 40}
];

function maartjeEarn(){
const tasks = monday.concat(tuesday);
const durationInHours = tasks.map((minutes) => minutes.duration / 60);
const moreThanTwoHours = durationInHours.filter((hours) => hours >= 2);
const salary = moreThanTwoHours.map((rate) => rate * 50);
const totalAmount = salary.reduce((accumulator, value) => accumulator + value, 0); 
const totalAmountinEuro = " The total amount is €" + " " + totalAmount.toFixed(2);
alert(totalAmountinEuro);           //i used alert just for popup
//console.log(totalAmountinEuro); 
return totalAmountinEuro;
}
maartjeEarn();