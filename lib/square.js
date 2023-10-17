const Shape = require('./shape.js')

class Square extends Shape {
    shape = 'square'

    constructor(text,textColor,color) {
        super(text,textColor,color);
    }
}

module.exports = Square