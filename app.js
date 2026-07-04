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