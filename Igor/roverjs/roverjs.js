
//level1
instructions.forEach((showMeTheWay) => {
    showMeTheWay() 
 })

// level2
const clearInstructions = instructions.filter((showMe1) => { 
    return showMe1 === "move" 
    || showMe1.turn === "left" 
    || showMe1.turn === "right"})

clearInstructions.forEach((showMe1) => {
        if (showMe1 === "move") {
                move()
        } else if (showMe1.turn === "right") {
                turn("right");
        }  else turn("left");
    })
//level2 var 2
const tryThis = instructions.filter((showMe1) => { 
        return showMe1 === "move" 
        || showMe1.turn === "left" 
        || showMe1.turn === "right"})
t
ryThis.forEach((direction) => {
typeof(direction) === "string" ? move() : turn(direction.turn)
})