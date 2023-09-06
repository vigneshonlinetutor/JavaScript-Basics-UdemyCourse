// Loop

/*
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}


/*
while (condition) {
  // Code to be executed in each iteration
}
*/

let count = 10;
while (count < 10) {
  console.log(count);
  count++;
}


/*
do {
  // Code to be executed in each iteration
} while (condition);
*/

let x = 5;
do {
  console.log(x);
  x++;
} while (x < 5);


// Break Statment

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//Continue Statement

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}