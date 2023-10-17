const Square = require('./square.js');

const squarehex = new Square('POP','#ff4500','#008F01');
const squarekeyword = new Square('YAY','yellow','navy');
const squarelowercase = new Square('ono','purple','#FFFFFF');

describe('Square', () => {
    describe('render hex codes', () => {
        it('should produce final SVG code with red-orange "POP" text on a green field', () => {
            expect(squarehex.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="75" y="25" width="150" height="150" fill="#008F01" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#ff4500">POP</text>

</svg>`)})
    }),
    describe('render color keywords', () => {
        it('should produce final SVG code with yellow "YAY" text on a blue field', () => {
            expect(squarekeyword.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="75" y="25" width="150" height="150" fill="#000080" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#ffff00">YAY</text>

</svg>`)})
    }),
    describe('render lowercase text', () => {
        it('should produce final SVG code with purple *all-caps* "ONO" text on a white field', () => {
            expect(squarelowercase.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="75" y="25" width="150" height="150" fill="#FFFFFF" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#800080">ONO</text>

</svg>`)})
    })
})