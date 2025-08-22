/* --------------------paper requirements------------------ */

function paperRequirements(book1, book2, book3) {
    let firstBook = (book1 * 100);
    let secondBook = (book2 * 200);
    let thirdBook = (book3 * 300);
    // console.log(firstBook,secondBook,thirdBook);
    const totalPage = firstBook + secondBook + thirdBook;
    return totalPage;
}
// const paperRequire = (1, 2, 3);
const totalBookPage = paperRequirements(1, 2, 3);
console.log('Total page:', totalBookPage);

/* ----------------------other way-------------------------- */

// function paperRequirements(book1, book2, book3) {
//     const firstBook = 100;
//     const secondBook = 200;
//     const thirdBook = 300;
//     const firstBookPage = book1 * firstBook;
//     const secondBookPage = book2 * secondBook;
//     const thirdBookPage = book3 * thirdBook;
//     const totalPage = firstBookPage + secondBookPage + thirdBookPage;
//     return totalPage;
// }
// // const paperRequire = (1, 2, 3);
// const totalBookPage = paperRequirements(1, 2, 3);
// console.log('Total page:', totalBookPage);