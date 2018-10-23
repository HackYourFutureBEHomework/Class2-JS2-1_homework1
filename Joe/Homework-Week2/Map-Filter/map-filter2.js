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
  
const tasks = monday.concat(tuesday);

const durationInHours = tasks.map((minutes) => minutes.duration / 60);

const moreThanTwoHours = durationInHours.filter((hours) => hours >= 2);

const salary = moreThanTwoHours.map((rate) => rate * 50);

const totalAmount = salary.reduce((accumulator, value) => accumulator + value, 0); 

const totalAmountinEuro = "The total amount is €" + " " + totalAmount.toFixed(2);

console.log(totalAmountinEuro);