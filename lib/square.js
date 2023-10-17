const Shape = require('./shape.js')

class Square extends Shape {
    constructor(shape,text,textColor,color) {
        super(shape = 'square',text,textColor,color);
    }
}

module.exports = Square