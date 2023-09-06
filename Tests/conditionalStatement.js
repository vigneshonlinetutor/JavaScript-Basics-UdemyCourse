// Conditional Statement

/*
The if Statement:

if (condition) {
  // Code to be executed if the condition is true
}
*/

let age = 10;

if(age >= 18){
    console.log('You are an adult');
}


/*
The else if Statement:

if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if none of the conditions are true
}

*/

let num = 0;

if(num > 0){
    console.log('Number is positive');
}
else if(num < 0){
    console.log('Number is negative');
}
else{
   console.log('Number is Zero'); 
}

/*

The else Statement:
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}

*/

// Nested Statement

let num2 = 10;

if(num2 >= 0){
    if(num2 === 0){
        console.log('Number is zero');
    }
    else{
        console.log('Number is positive');
    }
}
else{
    console.log('Number is negative');
}