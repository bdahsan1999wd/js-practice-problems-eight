// --------------------Task 1: Centimeter to Meter--------------------

function centimeterToMeter(centimeter) {
    // 1 cm = 0.01 meters
    const meter = centimeter * 0.01;
    return meter;
}

const Centimeters = 178;
const totalMeters = centimeterToMeter(Centimeters);
console.log(totalMeters, 'Meters');



console.log('--------------------------');
// --------------------Task 2: Meter to Centimeter--------------------

function meterToCentimeter(meter) {
    // 1 meter = 100 centimeters
    const centimeter = meter * 100;
    return centimeter;
}

const meterValue = 9.6;
const totalCentimeters = meterToCentimeter(meterValue);
console.log(totalCentimeters, 'Centimeters');



console.log('--------------------------');
// --------------------Other Way--------------------

function convertLengthMetric(value, unit) {
    if (unit === 'cm') return (value * 0.01).toFixed(2) + ' Meters';
    if (unit === 'm') return value * 100 + ' Centimeters';
    return 'Invalid unit';
}

console.log(convertLengthMetric(178, 'cm'));
console.log(convertLengthMetric(9.6, 'm'));