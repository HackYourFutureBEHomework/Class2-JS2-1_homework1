const arrayToPractice = [1, 2, 3, 4];

let doubledArray = arrayToPractice.filter((newList) => {
        return (newList % 2 !== 0);
}).map(function(elem) {
        return elem * 2;
})

console.log("New doubled array is following: " + doubledArray)



