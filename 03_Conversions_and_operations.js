let score = 33;
let score1 = "33abc";
let score2 = "Kartik";
let score3 = null;
let score4 = undefined;
let score5 = true;

console.log(typeof (score));
console.log(typeof (score1));
console.log(typeof (score2));
console.log(typeof (score3));
console.log(typeof (score4));
console.log(typeof (score5));


console.log("-------------------");


let newScore = Number(score); // 33
console.log(newScore);
console.log(typeof (newScore));

let newScore1 = Number(score1); // 33abc
console.log(newScore1);
console.log(typeof (newScore1));

let newScore2 = Number(score2); // Kartik
console.log(newScore2);
console.log(typeof (newScore2));

let newScore3 = Number(score3); // null
console.log(newScore3);
console.log(typeof (newScore3));

let newScore4 = Number(score4); // undefined
console.log(newScore4);
console.log(typeof (score4));

let newScore5 = Number(score5); // true
console.log(newScore5);
console.log(typeof (newScore5));

console.log("--------------------");


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // 1 is true and 0 is false.

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); // empty srting means false

let isLoggedIn2 = "Kartik";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // Filled String means true

console.log("-----------------------------");

let someNumber = 55;
let someString = String(someNumber);
console.log(someString);
console.log(typeof (someString));

console.log("--------------- OPERATIONS -----------------");

// Numerical Operations.

let num1 = 10;
let num2 = 20;

let num3 = num1 + num2;
let num4 = num1 - num2;
let num5 = num1 * num2;
let num6 = num1 / num2;
let num7 = num1 % num2;
let num8 = num1 ** num2;

// String Operations.

let str1 = "Hello";
let str2 = "Kartik";

let str3 = str1 + " " + str2;
console.log(str3);

let str4 = str1.concat(str2);
console.log(str4);

console.log(str1.concat(str2)); // this is also correct

console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log("1" + 20 + 24);
console.log(1 + 2 + "2");







