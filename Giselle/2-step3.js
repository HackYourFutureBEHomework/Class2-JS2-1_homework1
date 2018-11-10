'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        values.push(i);
        if (i % 3 === 0) {
            threeCallback(i);
        }
        if (i % 5 === 0) {
            fiveCallback(i);
        }
    }
    return values;
}
console.log(threeFive(
    10, 
    15, 
    function (num) { console.log(num + ' is divisible by 3'); }, 
    function (num) { console.log(num + ' is divisible by 5'); }
));
