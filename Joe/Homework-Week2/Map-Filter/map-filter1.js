const numbers = [1, 2, 3, 4];

const filtered = numbers.filter((val) => val % 2 !== 0);
const newNumbers = filtered.map((double) => double * 2);

console.log(newNumbers);
