const Circle = require('./circle.js');

const circle = new Circle('YAY','#ffd700','#000080')

expect(circle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="#000080" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#ffd700">YAY</text>

</svg>`);