/* -----------------for loop greater than five----------------- */

let numbers = [-1, -2, -3, 4, 5, 6, -7, 8, -9, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    if (element > 5) {
        // count = count + 1;
        // count +=1;
        count++;
    }
    else {

    }
}
console.log(count);

/* -------------function greater than five--------------- */

function greaterThanFive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 5) {
            // count = count + 1;
            // count += 1;
            count++;
        }
    }
    return count;
}
let result = greaterThanFive([-1, -2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(result);