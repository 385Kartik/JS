/*

Primitive data types:

 number => 2 to the power of 53
 bigInt => 
 string => ""
 boolean => true/false
 null => stand alone value
 undefined => 
 symbol => used for uniqueness


 object
*/

 let value = ""; // value  is string
 let value1; // value is undefined

 console.log(value, value1)

 console.log(typeof value);
 console.log(typeof null); // type of null is object
 console.log(typeof undefined); // type of undefined is undefined
 
 // Note: Null is an object.

 // There are 7 types of primitive datatypes: number, string, boolean, null, undefined, Symbol, bigInt.
 // There are 2 types of non-primitive datatypes: object, array.
 // Non-primitive datatypes are mutable. They can be changed after they are created.
 // Non-primitive datatypes are objects. They can be arrays, functions, objects, etc
 // Non-primitive datatypes are also known as reference datatypes.

 let id = Symbol('123')
 let anotherId = Symbol('123')                                   
 console.log(id === anotherId) // false

 let arr = ["Kartik", 7, true, null, undefined];
 console.log(arr);
 
 let obj = {
    name: "Kartik",
    age: 20,
    hobbies: ["reading", "swimming", "coding"],
 } // objects are key: value pairs.

 let funct = function(){
    console.log("Hello, World!"); // functions are also objects, but while checking the typeof function, then it will return function, actually it is known as object function.
 }




console.log("*********** Memory ***********");


// Their are two types of memory: Stack and Heap memory.

// Stack memory is used for primitive datatypes and heap memory is used for non-primitive datatypes.

// Primitive datatypes are stored in stack memory. They are stored in the stack memory in the order they are declared.
// Non-primitive datatypes are stored in heap memory. They are stored in the heap memory in the order they are declared.
// When we declare a variable, it is stored in the stack memory. When we declare an object
// or an array, it is stored in the heap memory.
// When we declare a function, it is stored in the stack memory. When we declare an object
// function, it is stored in the heap memory.
// In stack memory we get the copy of the value, but in heap memory we get the reference of the value.
// In stack memory we get the copy of the original value, and in heap we get the reference (address) of the value.
// It means heap memory me jo bhi change karenge toh original value me change hoga.


let myName = "Kartik";
let anotherName = myName;

anotherName = "Virtual";
console.log(myName); // Kartik
console.log(anotherName); // Virtual

// In the above code, myName and anotherName are two different variables. They are stored in the stack memory.

let userOne = {
   email: "kartik@gmail.com",
   upi: "kartik@upi",
}

let userTwo = userOne;

userTwo.email = "parmarkartik@gmail.com";

console.log(userOne.email); // parmarkartik@gmail.com
console.log(userTwo.email); // parmarkartik@gmail.com

// In the above code, userOne and userTwo are two different variables. They are stored in the stack memory, but the value of userOne and userTwo is stored in the heap memory, therefore we got the reference of the original value.

// When we change the value of userTwo, then the value of userOne also gets changed.
// This is because userOne and userTwo are two different variables, but they are storing the reference of the same value in the heap memory.
