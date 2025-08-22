/* -------------------------feet to inches----------------------- */
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const Feet = 6;
const totalInches = feetToInch(Feet);
console.log(totalInches, 'Inches');



/* -------------------------inches to feet----------------------- */
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const Inch = 72;
const totalFeet = inchToFeet(Inch);
console.log(totalFeet, 'Feet');