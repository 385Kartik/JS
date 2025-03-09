// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 >= 1);
// console.log(2 != 1);
// console.log(2 == 1);


console.log("2" > 1); // 2 is automatically converted to number.
console.log("02" > 1); // 02 is automatically converted to number.

console.log(null > 0); // 0 > 0 ? => false
console.log(null == 0); // equalty check dose'nt convert null to 0. null is not equal to 0.
console.log(null >= 0); // 0 >= 0 ? => true

// Note: Comparisions convert null to 0, undefined to -Infinity, and NaN to NaN.

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

// Avoid this type of comparisions.

console.log("=== Check");


console.log("2" == 2); // Here it will just check the value, not the datatype. So it will return true. Here conversion will happen.
console.log("2" === 2); // Here it will check both the value and the datatype. So it will return false. Here no conversion will happen.



