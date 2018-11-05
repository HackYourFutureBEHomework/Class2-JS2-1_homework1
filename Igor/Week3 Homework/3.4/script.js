function Dog(name, color, numLegs) {
    this.name = "name";
    this.color =  "color";
    this.numLegs = 5
}

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  let hound = new Dog()
  
  hound.name = "Jake";
  hound.color = "black";
  hound.numLegs = 3;
  
  console.log(hound)