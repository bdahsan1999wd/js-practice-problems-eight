function convertLength(value, unit) {
    // If unit is 'feet', convert to inches
    if (unit === 'feet') {
        return value * 12 + ' Inches';
    }
    // If unit is 'inch', convert to feet
    else if (unit === 'inch') {
        return value / 12 + ' Feet';
    }
    // If unit is neither 'feet' nor 'inch', return error message
    else {
        return 'Invalid unit';
    }
}

console.log(convertLength(6, 'feet'));
console.log(convertLength(72, 'inch'));
console.log(convertLength(5, 'meter'));