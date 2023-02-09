/* তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। */

/* --------------------string length---------------------- */

// let str = 'Ahsan';
// length = 5
// last Index = 5-1 = 4
// str[4]


/* ----------------------string reverse--------------------- */


// let friend = 'Abraham';
// for(let i = 0; i < friend.length; i++){
//     const element = friend[i];
//     console.log(element);
// }
// console.log('-----------------------')

/* -------------------------reverse string----------------------- */

// let friend = 'Abraham';
// let reversedString = '';
// for(let i = friend.length-1; i >= 0; i--){
//     const element = friend[i];
//     // console.log(element);
//     reversedString = reversedString + element;
// }
// console.log(reversedString);


/* ------------------function reverse string if else + for loop---------------- */

// function reverseName(nameOne, nameTwo){
//     let friendOneLength = nameOne.length;
//     let friendTwoLength = nameTwo.length;
//     let largeName = '' ;
//     if(friendOneLength > friendTwoLength){
//         largeName = nameOne;
//     }
//     else{
//         largeName = nameTwo;
//     }
//     let friend = 'Abraham';
//     let reversedString = '' ;
//     for(let i = friend.length-1; i >= 0; i--){
//         const element = friend[i];
//         // console.log(element);
//         reversedString = reversedString + element;
//     }
//     return reversedString;
// }
// let result = reverseName('john', 'Abraham');
// console.log(result);

/* ------------------------other way--------------------------------- */

/* --------------------function reverse string if else---------------------- */

// function reverseName(nameOne, nameTwo){
//     let friendOneLength = nameOne.length;
//     let friendTwoLength = nameTwo.length;
//     // console.log(nameOne);
//     // console.log(nameTwo);

//     if(friendOneLength > friendTwoLength){
//         return nameOne.split('').reverse().join('');
//     }
//     else{
//         return nameTwo.split('').reverse().join('');
//     }
// }
// let result = reverseName('John', 'Abraham');
// console.log('reverse:',result);