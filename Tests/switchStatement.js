// Switch Statement

/*
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  // Additional cases as needed
  default:
    // Code to be executed if none of the cases match
}
*/

let day = 1;
let dayName;

switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    default:
      dayName = "Weekend";
  }

  console.log(`It's a ${dayName}`)
  
