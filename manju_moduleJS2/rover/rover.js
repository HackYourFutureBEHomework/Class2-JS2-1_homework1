//JSON level1
const instructions = [/*<*/() => turn('right'), move, move, move, () => turn('left'), move, move, () => turn('left'), move, () => turn('right'), move, () => turn('left'), move, move, () => turn('left'), move/*>*/];

instructions.forEach(function(path) {
  path();
});

//JSON level2

const instructions = [/*<*/'move', {turn: 'right'}, 'move', 'move', 'move', 'move', {turn: 'left'}, 'move', 'move', 'move', {turn: 'left'}, 'move'/*>*/];

instructions.forEach(function(path) {
  if (path === 'move'){
    move();
  }
  if (path.turn === 'left'){
    turn('left');
  }else if(path.turn === 'right'){
    turn('right');
  }
    
}

// Advanced loops 

  while(isFinished() == false){
    move();
  }
