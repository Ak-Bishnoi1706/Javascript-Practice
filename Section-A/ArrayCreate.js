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
console.log("- Array literal is the simplest and most common way. it directly creates an array with given elements. \n- Array Literal ([]) → returns a new array with the given elements.");

// 2. Array constructor
const alphabet = new Array("A", "B", "C");
console.log("\nArray (constructor):- ", alphabet);
//Output:- ["A", "B", "C"]
console.log("- Array constructor is less commonly used but provides more control over array creation. \n- Array Constructor (new Array(...)) → returns a new array.");

