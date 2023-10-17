const Shape = require('./shape.js')

class Triangle extends Shape {
    constructor(shape,text,textColor,color) {
        super(shape = 'triangle',text,textColor,color);
    }
}

module.exports = Triangle