//First exercise

// ---- You cannot modify these lines
const instructions = [/*<*/() => turn('right'), move, move, move, () => turn('left'), move, move, () => turn('left'), move, () => turn('right'), move, () => turn('left'), move, move, () => turn('left'), move/*>*/];
// ++++
instructions.forEach(function(pathGuide) {
  pathGuide();
});


//Second exercise - 

// ---- You cannot modify these lines
const instructions = [/*<*/'move', {turn: 'right'}, 'move', 'move', 'move', 'move', {turn: 'left'}, 'move', 'move', 'move', {turn: 'left'}, 'move'/*>*/];
// ++++

instructions.forEach(function(pathGuide) {
  if (pathGuide === 'move'){
    move();
  }
  if (pathGuide.turn === 'left'){
    turn('left');
  } else if(pathGuide.turn === 'right'){
    turn('right');
  }
});