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

const tasks = monday.concat(tuesday);

// Add your code here

// convertDurationToHours
tasks.map(task => task.duration /= 60);
console.log('hourTasks:= ', tasks);

// filterOutShortTasks
const longTasks = tasks.filter(task => task.duration > 2);
console.log('longTasks:= ', longTasks);

// calculateRateTasks
const TASK_RATE = 12.34;
const bills = longTasks.map(task => task.bill = task.duration * TASK_RATE);
console.log('bills:= ', bills);

longTasks.forEach(task => {
    console.log('"' + task.name + '" -> ' + task.bill.toFixed(2));
});

const totalBill = longTasks.reduce((acc, task) => acc + task.bill, 0);
// longTasks.reduce(function(acc, task) { return acc + task.bill; }, 0);
const msg = 'Total bill:=  € ' + totalBill.toFixed(2) + ' EUR';
console.log(msg);
document.writeln(msg);
