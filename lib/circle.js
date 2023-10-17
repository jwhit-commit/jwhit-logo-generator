const Shape = require('./shape.js')

class Circle extends Shape {
    shape = 'circle'

    constructor(text,textColor,color) {
        super(text,textColor,color);
    }
}

module.exports = Circle