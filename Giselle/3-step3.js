'use strict';

function repeatStringNumTimesWithFor(str, num) {
  let repeatedStr = '';

  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));


function repeatStringNumTimesWithWhile(str, num) {
  let repeatedStr = '';

  let i = 0;
  while (i < num) {
    repeatedStr += str;
    i++;
  }

  return repeatedStr;
}
console.log('while', repeatStringNumTimesWithWhile('abc', 3));


function repeatStringNumTimesWithDoWhile(str, num) {
  let repeatedStr = '';

  let i = 0;
  do {
    repeatedStr += str;
    i++;
  } while (i < num);

  return repeatedStr;
}
console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
