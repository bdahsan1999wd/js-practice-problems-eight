function add(num1, num2) {
    // Check if either of the parameters is NOT a number
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter a number';
    }

    // If both are numbers, return their sum
    return num1 + num2;
}

console.log(add(1, 9));
console.log(add(1, 'a'));
console.log(add('x', 5));
console.log(add(3, 7));