/* QUES 22:- Existence check ke liye includes() often clearer kyun hai? NaN case discuss karo.
const values = [10, NaN, 30];

Requirements:
56. includes(NaN) predict.
57. indexOf(NaN) predict.
58. Difference explain.
*/

// Explanation
console.log("Includes:- It checks if the specified element exists in the array. It returns true if the element is found, otherwise false. \n Syntax:- array.includes(element, startIndex) \n element:- The element to locate in the array. \n startIndex:- Optional. The index to start the search at. Default is 0.");
console.log("IndexOf:- It returns the first occurrence index of the specified element in the array. If the element is not found, it returns -1. \n Syntax:- array.indexOf(element, startIndex) \n element:- The element to locate in the array. \n startIndex:- Optional. The index to start the search at. Default is 0.");

// Code
const values = [10, NaN, 30];

// includes(NaN) predict
console.log("Includes NaN:- ", values.includes(NaN)); // It returns true because includes() can correctly identify NaN in the array

// indexOf(NaN) predict
console.log("IndexOf NaN:- ", values.indexOf(NaN)); // It returns -1 because indexOf() uses strict equality (===) for comparison, and NaN is not equal to itself, so it cannot find NaN in the array

// Nan not equal to itself
console.log("NaN === NaN:- ", NaN === NaN); // It returns false because NaN is not equal to itself