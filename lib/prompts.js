const inquirer = require('inquirer');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
const { join } = require('path');
const { writeFile } = require('fs');

const generateLogo = () => {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like to display? [up to 3 characters]',            
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color should the text be? [enter a hex code or color keyword]',            
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape should the logo be?',      
            choices: ['triangle','square','circle'],
            default: 'square'
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color should the logo be? [enter a hex code or color keyword]',            
        },
    ])
    .then((spec) => {
        if (spec.shape === 'square') {
            square = new Square(spec.text,spec.textColor,spec.color);
            return square.render();
        } if (spec.shape === 'triangle') {
            triangle = new Triangle(spec.text,spec.textColor,spec.color);
            return triangle.render();
        } if (spec.shape === 'circle') {
            circle = new Circle(spec.text,spec.textColor,spec.color);
            return circle.render();
        }
    })
    .then((svg) => {
        return writeFile(
            join(__dirname, '..', 'examples', 'Generated logo.svg'),
            svg,
            (err) => console.log(err)
        );
    })
}

module.exports = generateLogo