//First exercise

// ---- You cannot modify these lines
const instructions = [/*<*/() => turn('right'), move, move, move, () => turn('left'), move, move, () => turn('left'), move, () => turn('right'), move, () => turn('left'), move, move, () => turn('left'), move/*>*/];
// ++++
instructions.forEach(function(pathGuide) {
  pathGuide();
});


//Second exercise - DIDNT make it work. I can not filter the right elements

// ---- You cannot modify these lines
const instructions = [/*<*/'move', {turn: 'right'}, 'move', 'move', 'move', 'move', {turn: 'left'}, 'move', 'move', 'move', {turn: 'left'}, 'move'/*>*/];
// ++++

instructions.forEach(function(pathGuide) {
  if (typeof value !== 'string' || typeof value !== 'object')
    return false
  else 
    pathGuide();
});


