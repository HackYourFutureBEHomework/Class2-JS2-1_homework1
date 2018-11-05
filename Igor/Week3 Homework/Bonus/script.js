arrayToTest = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


//let newArray = [];

function createNewArray(array) {
    let newArray =[];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) == -1) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(createNewArray(arrayToTest))

