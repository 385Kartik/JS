let name1 = "Kartik";
let job = "Web Development";

console.log("Hello!, My name is " + name1 + " and my job is " + job + ".");

// Another way of writing this line which is more convineint is:

console.log(`Hello!, My name is ${name1} and my job is ${job}.`);

let gameName = new String("Virtual-Kartik-01191");
console.log(gameName[0]); // Output: VirtualKartik

// Note: String is an object, it is a key value pair.
// At 0th position of the string, we can access V in the string VirtualKartik.

let newGameName = gameName.substring(0, 7); // It dosen't obey the negative value, if we pass the negative value then also it will start from the 0th position.
console.log(newGameName);

let anotherGameName = gameName.slice(-12, -6);
console.log(anotherGameName);

let newStringName = "     Kartik     ";
console.log(newStringName);
console.log(newStringName.trim()); // It trims the whitespaces in the string.

const url = "https://www.google.com/kartik%20photo";
//  Browser does not underdtand spaces in the url, so it converts the space with %20.

// To make the url readable, we can use the replace() method.

console.log(url.replace("%20", "-"));
console.log(url.includes("kartik"));

// We can split the name using any character, here we are splitting the name using space.

console.log(gameName.split("-"));

// It gives arrays.




