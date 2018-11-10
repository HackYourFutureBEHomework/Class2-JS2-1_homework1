'use strict';

// Add your code here
function createBase(baseNumber) {
    return (numberToAdd) => baseNumber + numberToAdd;
};

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
