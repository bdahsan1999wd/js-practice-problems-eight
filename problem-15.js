// ----------------- Version 1: Using classic for loop -----------------

function onlyPositive(numbers) {

    // Initialize a new array to store positive numbers
    let newNumber = [];

    // Loop through each number in the input array using index
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        // If the number is positive, add it to the new array
        if (number > 0) {
            newNumber.push(number);
        }
        // If the number is zero or negative, stop the loop immediately
        else {
            break;
        }
    }

    // Return the array containing all positive numbers before the loop stopped
    return newNumber;
}

const numbers = [45, 87, 96, 11, 63, 0, 71, -56, 28];
const positiveNumbers = onlyPositive(numbers);

console.log(positiveNumbers);


console.log('-------------------------');




// ----------------- Version 2: Using for...of loop -----------------

function onlyPositive(numbers) {

    // Initialize a new array to store positive numbers
    const result = [];

    // Loop through each number in the array directly
    for (const num of numbers) {
        // If the number is positive, add it to the result array
        if (num > 0) {
            result.push(num);
        }
        // If the number is zero or negative, break the loop immediately
        else {
            break;
        }
    }

    // Return the array containing all positive numbers before the loop stopped
    return result;
}

console.log(onlyPositive(numbers));