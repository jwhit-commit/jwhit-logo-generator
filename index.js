const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

circle = new Circle();
square = new Square();
triangle = new Triangle();

console.log(circle);
console.log(circle.render());
console.log(triangle);
console.log(triangle.render());
console.log(square);
console.log(square.render());
