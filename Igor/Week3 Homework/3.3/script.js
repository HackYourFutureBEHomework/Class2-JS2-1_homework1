// with for loop
function repeatStringNumTimes(str, num) {
    var outputString = ""
    if (num > 0) {
    for (var i = 0; i < num; i++) {
      outputString += str
    }
     return outputString;
   
   } else { 
     return ("")
     }
   }
   console.log(repeatStringNumTimes("*", 8));

// with while loop

function repeatStringNumTimes(str, num) {
    var outputString = ""
    if (num > 0) {
      var i = 0
    while (i < num) {
      outputString += str
      i++
    }
     return outputString;
   
   } else { 
     return ("")
     }
   }
   console.log(repeatStringNumTimes("*", 8));

   // with do...while
   
   function repeatStringNumTimes(str, num) {
    var outputString = ""
    if (num > 0) {
      var i = 0
    do {
      outputString += str
      i++
    }
    while (i < num)
     return outputString;
   
   } else { 
     return ("")
     }
   }
   console.log(repeatStringNumTimes("*", 8));