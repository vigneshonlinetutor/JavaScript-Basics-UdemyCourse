/*
- Arithmetic operators
- Assignment
- Comparison
- Logical
- Unary
- Ternary
- Bitwise
*/

// Arithmetic Operator

let a = 10;
let b = 5;

let sum = a + b;
console.log(sum);

let difference = a - b;
console.log(difference);

let multiplication = a * b;
console.log(multiplication);

let quotient = a / b;
console.log(quotient);

let reminder = a % b;
console.log(reminder);

let power = a ** b;
console.log(power);

// Assignment operators

let c = 10;
c *= 5;
console.log(c);

// Comparison operator
let num1 = 5;
let num2 = '5';

console.log(num1==num2);
console.log(num1===num2);
console.log(num1!=num2);
console.log(num1!==num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);
console.log(num1<=num2);

//Logical operator

let isTrue = true;
let isFalse = false;

let result1 = isTrue && isFalse; // false
let result2 = isTrue || isFalse; // true
let result3 = !isTrue // false

// Unary operator
let count = 10;
count++; //11
count--; // 10
let negativeCount = -count // -10
let positiveCount = +count // 10

// Ternary operator
let age = 10;
let myStatus = age>=18 ? 'Adult' : 'Minor';
console.log(myStatus);

// Binary Operator

let x = 5; // 0101
let y = 3; // 0011

let resultAnd = x & y;
let resultOr = x | y ;

console.log(resultAnd);
console.log(resultOr);

