/* Ques 28:- Numbers mein se even values select karo.
const numbers = [1,2,3,4,5,6,7,8];

Requirements:
73. filter solution.
74. Expected output.
*/

// Code 
const numbers = [1,2,3,4,5,6,7,8];

const evenNumbers = numbers.filter(num => num % 2 === 0);
// Purpose of === is to check if the number is equal to 0 (i.e., it's even)
// not using == because it checks for equality without type checking, which can lead to unexpected results in some cases.

console.log(evenNumbers);
// Output -> [2, 4, 6, 8]

// Explanation
/* Filter method is used to search for elements in an array based on a condition. In this case, we are filtering the numbers array to include only the even numbers. The original numbers array remains unchanged, demonstrating the non-mutating behavior of the filter method. */
/* Inshort Filter used to select elements from an array based on a condition and return a new array with the filtered elements. returns shallow copy and take references of elements.*/


