const colors = require('./colors.js')

//Create generic shape class
class Shape {
    validColor;
    validTextColor;
    shape = 'square';

    constructor(text = 'SVG', textColor = '#FFFFFF', color = '#000000') {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    };

    //Functions to convert color keywords to hex codes
    validateTextColor() {this.validTextColor = colors.validateColor(this.textColor)}

    validateColor() {this.validColor = colors.validateColor(this.color)}

    //Use inputs to construct the XML code for the SVG text
    composeTextXML() {
        this.validateTextColor();

        return `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.validTextColor}">${this.text}</text>`
    };

    //Use inputs to construct the XML code for the SVG shape (size and color)
    composeShapeXML() {
        this.validateColor()

        if (this.shape === 'square') {
            return `<rect x="75" y="25" width="150" height="150" fill="${this.validColor}" />`
        }
        if (this.shape === 'circle') {
            return `<circle cx="150" cy="100" r="80" fill="${this.validColor}" />`
        }
        if (this.shape === 'triangle') {
            return `<polygon points="150,0 75,125 225,125" fill="${this.validColor}" />`
        }
        else {
            throw new Error('No shape parameter set.')
        }

    };

    //Wraps specific shape XML in SVG code wrapper
    composeXML(shapeLine,textLine) {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
   
            ${shapeLine}
   
            ${textLine}
   
        </svg>`
    };

    //Composes full SVG code via component functions
    render() {
        let textLine = this.composeTextXML();
        let shapeLine = this.composeShapeXML();
        let xml = this.composeXML(shapeLine,textLine);
        return xml
    }
}


module.exports = Shape