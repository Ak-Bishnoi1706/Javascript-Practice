console.log("\nQues 2:- Array create karne ke kam se kam do ways explain karo. Array literal aur constructor ke examples likho.\n")
/* Requirements:
4.	Dono outputs explain karo.
5.	Normal application code mein preferred approach batao.
 */

// EXPLANATION
console.log("- There are two main ways to create an array in JavaScript: using array literals and using the Array constructor.\n");

//1. Array Literal
const numbers = [1, 2, 3, 4, 5];
console.log("Array (literals):- ", numbers);
//Output:- [1, 2, 3, 4, 5]

console.log("- Array literal is the simplest and most common way. It directly creates an array with given elements. \n- Array Literal ([]) → returns a new array with the given elements.");
console.log("Array literals → everyday coding (React, Node.js, APIs,configs).");

// 2. Array constructor
const alphabet = new Array("A", "B", "C");
console.log("\nArray (constructor):- ", alphabet);
//Output:- ["A", "B", "C"]
console.log("- Array constructor is less commonly used but provides more control over array creation. \n- Array Constructor (new Array(...)) → returns a new array.");

const arr = new Array(5); // [ <5 empty items> ]
console.log(arr, arr[0], arr.length);

 const Arr = new Array("A", "B", "C"); // make an array containig these values
console.log(Arr, Arr.length);

console.log("- If you pass one number → it’s treated as length.");

console.log("- If you pass multiple values → they become elements.");

console.log("- This can be confusing, so most developers prefer array literals ([]).");

console.log("Array constructor → special cases (pre‑allocation, grids, buffers, dynamic generation).");

