arrayToTest = [1, 2, 43, 10, 12, 6, 5, 4, 8, 9, 49, 43];

let n = 7;

let stringInput = "This is a STrIng To TeSt"

// function findTheFirstParameters(array, n) {
//   return array.slice(0, n)
// }
// console.log(findTheFirstParameters(arrayToTest, n));

//console.log(arrayToTest[1] += "-");

// function addDashes(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
//       array[i] += "-";
//     }
//   }
//   console.log(array.join(""));
// }
// addDashes(arrayToTest);

// function mostFrequent(array) {
//   let frequency = 1;
//   let counter = 0;
//   let itemName;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//       if (array[i] == array[j])
//         counter++;
//       if (frequency < counter) {
//         frequency = counter;
//         itemName = array[i];
//         console.log(itemName);
//       }
//     }
//     counter = 0;
//   }
// }
// mostFrequent(arrayToTest);


////*** Change cases upper to lower and lower to upper*** */
// let newArrayString = [];
// function splitString(array) {
//   for (let i = 0; i < array.length; i++) {
//     newArrayString.push(array.charAt(i))
//   }
//   return newArrayString;
// }

// let arraySplitted = splitString(stringInput)
// let changedArrayCases = [];


// function changeUpperToLower(a) {
//   for (let i = 0; i < arraySplitted.length; i++) {
//     if (arraySplitted[i] === arraySplitted[i].toUpperCase()) {
//       changedArrayCases.push(arraySplitted[i].toLowerCase())
//     } else {
//       changedArrayCases.push(arraySplitted[i].toUpperCase())
//     }
//   }
//   return changedArrayCases.join("");
// }
// console.log(changeUpperToLower(arraySplitted))
////********************* */

// let objectToTest = {
//   complete_reference_html5_and_css1: "./images/complete_reference_html5_and_css.jpeg",
//   css_the_missing_manual2: "./images/css_the_missing_manual.png",
//   effective_javascript3: "./images/effective_javascript.jpeg",
//   eloquent_javascript4: "./images/eloquent_javascript.jpeg",
//   html5_the_missing_manual5: "./images/html5_the_missing_manual.png",
//   js_and_jquery_interactive_front_end_web_development6: "./images/js_and_jquery_interactive_front_end_web_development.jpeg",
//   learning_react_native7: "./images/learning_react_native.jpg",
//   learning_web_design8: "./images/learning_web_design.jpeg",
//   professional_javascript_for_web_developers9: "./images/professional_javascript_for_web_developers.jpeg",
//   javascript_the_good_parts10: "./images/javascript_the_good_parts.jpeg"
// }
// ////******* Length of the object */
// //console.log(Object.keys(objectToTest).length)
// ////********** */

// // Searching for property in object
// let propertyToSearch = "html5_the_missing_manual5";

// function checkProperty(object, property) {

//   if (object.hasOwnProperty(property)) {
//     console.log("Yes, it\'s here")
//   } else {
//     console.log("No property found")
//   }
// }
// checkProperty(objectToTest, propertyToSearch);

// //************************** */

let date = new Date();
console.log(date);
let hour = date.getTime(":");
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(hour)

let time = date.toLocaleTimeString()
console.log(time)

// function timeNow() {
//   for (let i = 0; i < 1000; i++) {
//     let timeS = new Date().getTime()
//     console.log(timeS)
//     window.setTimeout(timeS, 1000)
//   }
// }
// timeNow();

