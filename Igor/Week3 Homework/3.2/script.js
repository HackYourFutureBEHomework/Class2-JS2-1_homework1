
function sayFive(element){
    console.log(element + " sayFive")
}
function sayThree(element){
    console.log(element + " sayThree")
}

function sayBoth(element) {
    console.log(element + " is divided with both 3 and 5")
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback, bothCallback) {
    const values = [];
    
    for (let i = 0; i = (stopIndex - startIndex); i++) {
        values.push(startIndex)
        startIndex++
    }
   
    values.forEach(function(element) {
        if ((element % 3 === 0) && (element % 5 === 0)) {
            bothCallback(element)
        } else {
        if (element % 3 === 0) {
            threeCallback(element)
        } 
        if (element % 5 === 0) {
           fiveCallback(element) 
        }
    }
    })
}
console.log(threeFive(10, 20, sayThree, sayFive, sayBoth));
