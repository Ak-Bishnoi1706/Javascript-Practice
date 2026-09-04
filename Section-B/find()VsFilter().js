/* Ques 29.  Return value aur use-case ka difference explain karo.

Requirements:
75. One-item example.
76. Multiple-item example.
77. Both code snippets.
 */

// Return Value:
console.log("Return Value means output of a function or method after execution. It is the value that is returned to the caller when the function completes its task. \n- Every method has different return values (boolean, string, number, array, object, etc.) based on its purpose and implementation. \n- Return value is used to get the result of a function and can be stored in a variable or used directly in expressions.");
/* Example of Return Value:- 
     - Array.push() - Returns the new length of the array after adding an element. 
     - Array.pop() - Returns the removed element from the end of the array. 
     - Array.shift() - Returns the removed element from the beginning of the array. 
     - Array.unshift() - Returns the new length of the array after adding an element at the beginning. 
     - Array.slice() - Returns a shallow copy of a portion of an array into a new array object. 
     - Array.splice() - Returns an array containing the deleted elements (if any) from the original array.");
*/

// code snippet for Return Value:

// One-item example:
let arr1 = [1, 2, 3, 4, 5];
let OneValue = arr1.find((element) => element > 3); // Returns the first element that satisfies the condition
console.log("One-item example of Return Value:", OneValue); // Output: 4

// Multiple-item example:
let arr2 = [1, 2, 3, 4, 5];
let MultipleValues = arr2.filter((element) => element > 3); // Returns all elements that satisfy the condition
console.log("Multiple-item example of Return Value:", MultipleValues); // Output: [4, 5]

// Use Case:
console.log("\nUse Case help developers understand the purpose of a function and how it can be utilized effectively in different situations. ");

// Example of Use Case:-

// One-item example:
let arr3 = [10, 20, 30, 40, 50];
let useCaseOneValue = arr3.find((element) => element > 25); // Use case: Finding the first element greater than 25
console.log("One-item example of Use Case:", useCaseOneValue); // Output: 30

// Multiple-item example:
let arr4 = [10, 20, 30, 40, 50];
let useCaseMultipleValues = arr4.filter((element) => element > 25); // Use case: Filtering all elements greater than 25
console.log("Multiple-item example of Use Case:", useCaseMultipleValues); // Output: [30, 40, 50]

