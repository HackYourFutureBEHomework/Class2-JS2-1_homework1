const addSix = createBase(6);

function createBase(x) {
    return function(y) {
        return x + y
    }
}

addSix(10); // returns 16
console.log(addSix(10))
addSix(21); // returns 27
console.log(addSix(21))