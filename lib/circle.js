const Shape = require('./shape.js')

class Circle extends Shape {
    constructor(shape,text,textColor,color) {
        super(shape = 'circle',text,textColor,color);
    }
}

module.exports = Circle