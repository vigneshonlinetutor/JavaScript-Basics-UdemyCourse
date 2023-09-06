// Function Declaration

function greeting(name){
    console.log(`Hello ${name}`)
}

greeting('Vignesh');

// Function Expression

const greet = function greeting(name){
    console.log(`Hello ${name}`)
};

console.log(greet);

function add(a, b){
    return a+b;
}

console.log(add(1,3));

const multiply = function(a,b){
    return a*b;
}

const productValue = multiply(3,3);
console.log(productValue);

const square = x => x * x;
const result = square(5);
console.log(result);