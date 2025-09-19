// =============================================
// Chapter 26-30: MATH METHODS
// =============================================

// Q1 - Positive Integer Example
document.writeln("-----------------Q1-----------------<br>");

var num = +prompt("Enter a positive decimal number:");

document.writeln("a. Original number: " + num + "<br>");
document.writeln("b. Math.round(): " + Math.round(num) + "<br>");
document.writeln("c. Math.floor(): " + Math.floor(num) + "<br>");
document.writeln("d. Math.ceil(): " + Math.ceil(num) + "<br>");

// Q2 - Negative Floating Point Number Example
document.writeln("-----------------Q2-----------------<br>");

var num = +prompt("Enter a negative decimal number:");

document.writeln("a. Original number: " + num + "<br>");
document.writeln("b. Math.round(): " + Math.round(num) + "<br>");
document.writeln("c. Math.floor(): " + Math.floor(num) + "<br>");
document.writeln("d. Math.ceil(): " + Math.ceil(num) + "<br>");

// Q3 - Absolute Value Example
document.writeln("-----------------Q3-----------------<br>");

var num = +prompt("Enter any number (positive or negative):");
var absValue = Math.abs(num);

document.writeln("Original number: " + num + "<br>");
document.writeln("The absolute value of " + num + " is: " + absValue + "<br>");

// Q4 - Dice Simulation
document.writeln("-----------------Q4-----------------<br>");

var dice = Math.floor(Math.random() * 6) + 1;
document.writeln("Random dice value: " + dice + "<br>");

// Q5 - Coin Toss
document.writeln("-----------------Q5-----------------<br>");

var coin = Math.floor(Math.random() * 2);
if (coin === 0) {
    document.writeln("Random coin value: Heads<br>");
} else {
    document.writeln("Random coin value: Tails<br>");
}

// Q6 - Random Number 1 to 100
document.writeln("-----------------Q6-----------------<br>");

var num = Math.floor(Math.random() * 100) + 1;
document.writeln("Random number between 1 and 100: " + num + "<br>");

// Q7 - Weight Parsing
document.writeln("-----------------Q7-----------------<br>");

var weight = prompt("Enter your weight (e.g. 65.5kg):");
var parsedWeight = parseFloat(weight);

document.writeln("Your weight: " + parsedWeight + " kilograms<br>");

// Q8 - Secret Number Guessing Game
document.writeln("-----------------Q8-----------------<br>");

var secret = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess a number between 1 and 10:");

if (guess === secret) {
    document.writeln("Congratulations! You guessed the secret number.<br>");
} else {
    document.writeln("Sorry! The secret number was: " + secret + "<br>");
}















































