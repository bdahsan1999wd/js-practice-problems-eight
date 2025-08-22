/* -----------------summation------------------ */
let n = 10;
let sum1 = 0;
for (let i = 1; i <= n; i++) {
    // console.log(i);
    sum1 = sum1 + i;
}
console.log('sum1:', sum1);



/* ----------------other way--------------------- */

let sum2 = (n * (n + 1)) / 2;
console.log('sum2:', sum2);