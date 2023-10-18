const Circle = require('./circle.js');

const circlehex = new Circle('POP','#ff4500','#008F01');
const circlekeyword = new Circle('YAY','yellow','navy');
const circlelowercase = new Circle('ono','purple','#FFFFFF');
 
describe('Circle', () => {
    describe('render hex codes', () => {
        it('should produce final SVG code with red-orange "POP" text on a green field', () => {
            expect(circlehex.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="#008F01" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#ff4500">POP</text>

</svg>`)})
    }),
    describe('render color keywords', () => {
        it('should produce final SVG code with yellow "YAY" text on a blue field', () => {
            expect(circlekeyword.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="#000080" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#ffff00">YAY</text>

</svg>`)})
    }),
    describe('render lowercase text', () => {
        it('should produce final SVG code with purple *all-caps* "ONO" text on a white field', () => {
            expect(circlelowercase.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="#FFFFFF" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#800080">ONO</text>

</svg>`)})
    })
})


