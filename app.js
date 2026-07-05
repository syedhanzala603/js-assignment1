let productName = "Laptop";
let price = 999.99;
let inStock = true;

console.log(productName, price, inStock);


// Question 2: Mathematical Operations
// Calculate and display:
// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator
let remainder = 27 % 4;
let square = 12 ** 2;
let num1 = 8;
num1++;
let num2 = 15;
num2 -= 2;
console.log(remainder);
console.log(square);
console.log(num1);
console.log(num2);


// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.
let firstName = "alex";
let lastName = "SMITH";
let fullName = firstName + " " + lastName;
let properCase = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
console.log(properCase);
console.log(fullName.length);



// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.
let temperature = 25;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");
} else {
  console.log("Cold day");
}



// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3
let check1 = 15 === "15";
let check2 = 20 > 15 && 20 < 25;
let check3 = 10 !== 10 || 5 > 3;
console.log(check1);
console.log(check2);
console.log(check3);


// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors);
console.log(colors.length);



// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(2, 1, "dragonfruit");
console.log(fruits);
let middleThree = fruits.slice(1, 4);
console.log(middleThree);



// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 8) {
    break; 
  }
  console.log(i);
  sum += i;
}

console.log("Sum:", sum);



// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}



// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10
let text = "The quick brown fox jumps over the lazy dog";
let position = text.indexOf("fox");
console.log(position)
let extracted = text.slice(10, 19);
console.log(extracted);
let hasDog = text.includes("dog");
console.log(hasDog);
let char10 = text.charAt(10);
console.log(char10);



// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"
let sentence = "I love JavaScript and JavaScript is awesome";
let replaceFirst = sentence.replace("JavaScript", "coding");
console.log(replaceFirst);
let replaceAll = sentence.replace(/JavaScript/g, "JS");
console.log(replaceAll);
let replaceUpper = sentence.replace("awesome", "AWESOME");
console.log(replaceUpper);



// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places
let num = 123.456789;
let rounded2 = num.toFixed(2);
let rounded = Math.round(num);
let floorValue = Math.floor(num)
let ceilValue = Math.ceil(num);
let fourDecimals = num.toFixed(4);
console.log(rounded2);
console.log(rounded);
console.log(floorValue);
console.log(ceilValue);
console.log(fourDecimals);



// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)
let randomInt = Math.floor(Math.random() * 100) + 1;
let randomDecimal = Math.random().toFixed(3);
let randomRange = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
console.log(randomInt);
console.log(randomDecimal);
console.log(randomRange);



// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean
let num1x = Number("123");
let num2x = parseFloat("45.67");
let str1 = String(789);
let bool1 = Boolean("true");
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(str1, typeof str1);
console.log(bool1, typeof bool1);



// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hours = now.getHours();
let formatted = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
let specificDate = new Date(2024, 11, 25);
console.log(year, month, day);
console.log(hours);
console.log(formatted);
console.log(specificDate);


// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result. Handle division by zero by returning "Error: Division by zero".
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, 0, "/"));



// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it, while also incrementing the global variable. Show the difference after calling the function twice.
// global variable
let globalCounter = 0;

function incrementCounter() {
  let globalCounter = 0;
  globalCounter++;
  console.log("Local counter inside function:", globalCounter);
}

incrementCounter();
incrementCounter();

console.log("Global counter (unchanged):", globalCounter);



// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(10));



// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing each number. Then print "Blast off!". Also calculate the factorial of 5 using a while loop.
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

console.log("Blast off!");


let n = 5;
let factorial = 1;

while (n >= 1) {
  factorial *= n;
  n--;
}

console.log("Factorial of 5:", factorial);



// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password. Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.
let enteredPassword = "";
let attempts = 0;
let correctPassword = "secret123";
let simulatedInputs = ["abc123", "hello", "password1", "secret123", "test"];

do {
  enteredPassword = simulatedInputs[attempts];
  attempts++;
  console.log("Attempt " + attempts + ": Trying '" + enteredPassword + "'");

} while (enteredPassword !== correctPassword && attempts < 5);

if (enteredPassword === correctPassword) {
  console.log("Access granted! Correct password entered on attempt " + attempts);
} else {
  console.log("Access denied. Maximum attempts (5) reached.");
}




