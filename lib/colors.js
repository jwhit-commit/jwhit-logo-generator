const colors = require('color-to-hex');

const validateColor = (color) => {
    if (color.startsWith('#')) {return color} else {return colors[color]}
}

module.exports = { validateColor }