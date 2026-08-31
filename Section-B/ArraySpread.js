/*Ques 18:- Two arrays ko spread operator se merge karo.

const a = [1,2,3];
const b = [4,5,6];

Requirements:
Merged array do.
Original arrays unchanged kyun?
*/

// Explanation
console.log("Spread method is used to Un-Pack the values of array and object without mutating the orignal once. \n- It is used to merge two or more arrays or objects. \n- The spread operator is represented by three dots (...).\n Syntax:- [...array1, ...array2]; {...object1, ...object2};");

const a = [1, 2, 3];
const b = [4, 5, 6];

const mergedArr = [...a, ...b];

console.log("\nOriginal Array a:- ", a);
console.log("Original Array b:- ", b);
console.log("Merged Array:- ", mergedArr);