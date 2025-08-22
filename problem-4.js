/* -------------------------reverse string----------------------- */

// let friend = 'Abraham';
// let reversedString = '';
// for (let i = friend.length - 1; i >= 0; i--) {
//     const element = friend[i];
//     console.log(element);
//     reversedString = reversedString + element;
// }
// console.log(reversedString);


// console.log('---------------------');


/* ------------------function reverse string if else + for loop---------------- */

// function reverseName(nameOne, nameTwo) {
//     let friendOneLength = nameOne.length;
//     let friendTwoLength = nameTwo.length;
//     let largeName = '';
//     if (friendOneLength > friendTwoLength) {
//         largeName = nameOne;
//     }
//     else {
//         largeName = nameTwo;
//     }
//     let friend = 'Abraham';
//     let reversedString = '';

//     for (let i = friend.length - 1; i >= 0; i--) {
//         const element = friend[i];
//         console.log(element);
//         reversedString = reversedString + element;
//     }
//     return reversedString;
// }

// let result = reverseName('john', 'Abraham');

// console.log(result);


// console.log('----------------------');


/* --------------------function reverse string if else---------------------- */

function reverseName(nameOne, nameTwo) {
    let friendOneLength = nameOne.length;
    let friendTwoLength = nameTwo.length;
    // console.log(nameOne);
    // console.log(nameTwo);

    if (friendOneLength > friendTwoLength) {
        return nameOne.split('').reverse().join('');
    }
    else {
        return nameTwo.split('').reverse().join('');
    }
}
let results = reverseName('John', 'Abraham');
console.log('reverse:', results);