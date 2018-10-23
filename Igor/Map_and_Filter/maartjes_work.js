'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const perHourRate = 15;
const tasks = monday.concat(tuesday);
let earnedTotal = 0;


let durationInMinutes = tasks.map((obj) => {
  return Math.round((obj.duration / 60) * 100) / 100;
})

let moreThan2Hours = durationInMinutes.filter((minHours) => {
  return minHours > 2;
})

let amountPerTask = moreThan2Hours.map((time) => {
  return time * perHourRate;
}) 

 amountPerTask.forEach(function(itemInArray) {
   return earnedTotal += itemInArray;
 }) 

let earnedTotalEur = earnedTotal.toLocaleString("en-RUR", {
  style: "currency",
  currency: "EUR",
})
console.log("Maartje is a rich lady and earned in total: " + earnedTotalEur)

let amountPerTaskEur = amountPerTask.toLocaleString("en-EUR", {
  style: "currency",
  currency: "EUR",
})
console.log("For every task, she receives: " + amountPerTaskEur)
