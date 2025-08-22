// Original object
let student = { name: 'Yo Mama', age: 17 };
console.log(student);

// Delete the 'age' property from the object
delete student.age;

console.log(student);



console.log('--------------------------------------');


/* -------------------------using a function----------------------- */
function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}

// Example 1
const student1 = { name: 'Yo Mama', age: 17 };
console.log(student1);

console.log(deleteProperty(student1, 'age'));


console.log('--------------------------------------');

// Example 2
const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
console.log(car);

console.log(deleteProperty(car, 'model'));