const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const colors = require('./lib/colors.js')

circle = new Circle("SVG",'red','purple');
square = new Square("POP",'yellow','blue');
triangle = new Triangle("TIT",'black','white');

console.log(circle);
console.log(circle.render());
console.log(triangle);
console.log(triangle.render());
console.log(square);
console.log(square.render());

// class Thing {
//     validColor;

//     constructor(color) {
//         this.color = color;
//     }

//     validateColor() {this.validColor = colors.validateColor(this.color)}
// }

// thing = new Thing('red');
// thing.validateColor();

// console.log(thing)