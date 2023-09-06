// Type inference
let x = 42; 
let y = 'Vignesh';
let z = true;

// Data Type Change

let a = 42;
console.log(typeof(a));
a = "Vignesh";
console.log(typeof(a));

// Type Coercion

let result = 5 + "5";
console.log(result);
console.log(typeof(result));

// Weakly Typed

// Type Checking

let b = "50";
if(typeof(b)=== 'number'){
    console.log('b is a number');
}
else{
    console.log('b is not a number')
}