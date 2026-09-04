/*Ques 26:- Numbers ko double karke new array banao.
const numbers = [1,2,3,4,5];

Requirements:
68. map solution.
69. Expected output.
70. Mutation behavior.
 */

// Explanation
console.log("Map:- Map means to create a new array by applying a function to each element of the original array.\n- It returns a new array with the elements that have been tranformed by the provided function.\n- Syntax:- array.map(callback() => transformation) \n- callback:- Function to execute on each value in the array.\n");
console.log("Mutation Behavior:- The map() method does not mutate the original array. It creates a new array with the transformed values.\n");
console.log("Map returns shallow copy of the original array with transformed values. It does not modify the original array.\n");

// Code
const numbers = [1, 2, 3, 4, 5];

// Map to double the numbers
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);