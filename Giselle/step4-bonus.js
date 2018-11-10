'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function removeDuplicates(values) {
  return values.filter((value, index, array) => array.indexOf(value) === index);
}

const uniqueValues = removeDuplicates(values);

console.log(uniqueValues);
