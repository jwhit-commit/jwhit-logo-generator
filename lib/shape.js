class Shape {
    constructor(shape = 'square', text = 'SVG', textColor = '#FFFFFF', color = '#000000') {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    };

    composeTextHTML() {
        return `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };

    composeShapeHTML() {
        if (this.shape === 'square') {
            return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
        }
        if (this.shape === 'circle') {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        }
        if (this.shape === 'triangle') {
            return `<polygon points="150,0 75,125 225,125" fill="${this.color}" />`
        }
        else {
            throw new Error('No shape parameter set.')
        }

    };

    composeHTML(shapeLine,textLine) {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
   
            ${shapeLine}
   
            ${textLine}
   
        </svg>`
    };

    render() {
        let textLine = this.composeTextHTML();
        let shapeLine = this.composeShapeHTML();
        let xml = this.composeHTML(shapeLine,textLine);
        return xml
    }
}


module.exports = Shape