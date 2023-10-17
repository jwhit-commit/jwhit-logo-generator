const Shape = require('./shape.js')

class Triangle extends Shape {
    shape = 'triangle'

    constructor(text,textColor,color) {
        super(text,textColor,color);
    }
}

module.exports = Triangle