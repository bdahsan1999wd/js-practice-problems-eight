## Problem 1: Summation Function

Find the summation of numbers from 1 to n.

---

## Problem 2: Multiplication Table

Write the multiplication table of 3 using JavaScript.

---

## Problem 3: Count Elements Greater Than 5

Create a function that takes an array as input. Then, count how many elements in that array are greater than 5.

**Example:**

Input: `[-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]`

Output: `3`

---

## Problem 4: Longer Name in Reverse

Pass the names of your two friends as parameters to a function.
Then, return the longer name in reverse order.

**Example:**

Input: `("John", "Abraham")`

Output: `"maharbA"`

---

## Problem 5: Convert ml to L

Create a function that takes the volume of water in milliliters (ml) as input.
Convert the volume into liters (L) and return the result.

**Example:**

Input: `2000`

Output: `2`

---

## Problem 6: Find Youngest Person

Create a function that receives an array of objects as a parameter.
Each object contains a person's `name` and `age`.
Your task is to find the **youngest person** in the array and return that object.

**Example:**

Input:

```js
[
  { name: "Ahsan", age: 25 },
  { name: "Habib", age: 20 },
  { name: "Ashik", age: 30 },
];
```

Output:

```js
{name: "Habib", age: 20}
```

---

## Problem 7: Add Function with Type Check

Create a function `add` that takes two parameters.

- If both parameters are numbers, return their sum.
- If any parameter is not a number, return `"Please enter a number"`.

**Example:**
Input: `add(1, 9)`
Output: `10`

Input: `add(1, "a")`
Output: `"Please enter a number"`

---

## Problem 8: Multiply Function

Create a function `multiply` that takes two numbers as parameters and returns their product.

**Example:**
Input: `multiply(2, 8)`
Output: `16`

---

## Problem 9: Delete Property from an Object

Given an object, delete a specific property from it.
Return the updated object.

**Example:**
Input: `{ name: 'Yo Mama', age: 17 }`, delete property `'age'`
Output: `{ name: 'Yo Mama' }`

---

## Problem 10: Feet & Inches Conversion

### Task 1: Feet to Inch

Write a function `feetToInch` that takes a value in feet and returns its equivalent in inches.

**Example:**

```js
Input: 6;
Output: 72;
```

### Task 2: Inch to Feet

Write a function inchToFeet that takes a value in inches and returns its equivalent in feet.

**Example:**

```js
Input: 72;
Output: 6;
```

---

## Problem 11: General Length Converter

Create a function `convertLength` that takes two parameters:

1. `value` (number) – the length value
2. `unit` (string) – either `"feet"` or `"inch"`

The function should:

- Convert feet to inches if the unit is `"feet"`.
- Convert inches to feet if the unit is `"inch"`.
- Return `"Invalid unit"` if the unit is neither `"feet"` nor `"inch"`.

**Example:**

```js
convertLength(6, "feet"); // Output: "72 Inches"
convertLength(72, "inch"); // Output: "6 Feet"
convertLength(5, "meter"); // Output: "Invalid unit"
```

---

## Problem 12: Centimeter & Meter Conversion

### Task 1:

Write a function named `centimeterToMeter` that takes a value in centimeters and returns its equivalent in meters.

**Example:**

```js
Input: 178;
Output: 1.78;
```

### Task 2:

Write a function `meterToCentimeter` that takes a value in meters and returns its equivalent in centimeters.

**Example:**

```js
Input: 9.6;
Output: 960;
```

---

## Problem 13: Paper Requirement Calculator

Write a function named `paperRequirements` that takes three parameters:

1. `book1` – Number of copies of the first book
2. `book2` – Number of copies of the second book
3. `book3` – Number of copies of the third book

Each book requires a fixed number of pages:

- First book: 100 pages per copy
- Second book: 200 pages per copy
- Third book: 300 pages per copy

The function should calculate the total number of pages required for all copies of the three books and return the result.

**Example:**

```js
paperRequirements(1, 2, 3); // Output: 1400
```

---

## Problem 14: Find Best Friend (Longest Name)

Write a function named `bestFriend` that takes an array of strings as input.
Each element of the array is a friend's name.

Your task is to find the friend with the **longest name** and return that name (string).

**Example:**

```js
const friends = [
  "rabbi",
  "shahadat",
  "nazim",
  "ahsanhabib",
  "hasib",
  "rifat",
  "shakib",
];

bestFriend(friends); // Output: 'ahsanhabib'
```

---

## Problem 15: Only Positive Numbers

Write a function named `onlyPositive` that takes an array of numbers as input.

Your task is to:

- Check each number in the array one by one.
- If the number is **positive** (greater than 0), store it in a new array.
- If the number is **zero or negative**, stop the loop immediately.
- Return the array containing all the positive numbers found **before the loop stopped**.

**Example:**

```js
const numbers = [45, 87, 96, 11, 63, 0, 71, -56, 28];

onlyPositive(numbers); // Output: [45, 87, 96, 11, 63]
```
