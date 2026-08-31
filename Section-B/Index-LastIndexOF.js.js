/* QUES 21:- 20 ka first aur last occurrence find karo.
const numbers = [10,20,30,20,40,20];

Requirements:
53. indexOf use karo.
54. lastIndexOf use karo.
55. No-match result explain karo.
 
*/

// Explanation
console.log("IndexOf:- It returns the first occurrence index of the specified element in the array. If the element is not found, it returns -1. \n Syntax:- array.indexOf(element, startIndex) \n element:- The element to locate in the array. \n startIndex:- Optional. The index to start the search at. Default is 0.");
console.log("LastIndexOf:- It returns the last occurrence index of the specified element in the array. If the element is not found, it returns -1. \n Syntax:- array.lastIndexOf(element, startIndex) \n element:- The element to locate in the array. \n startIndex:- Optional. The index to start the search at. Default is array.length - 1.");

// Code
const numbers = [10, 20, 30, 20, 40, 20];

// First Occurence index of 20 Element
console.log("IndexOf 20:- ", numbers.indexOf(20));

// Last Occurence index of 20 Element
console.log("LastIndexOf 20:- ", numbers.lastIndexOf(20));

// First Occurence index of 20 Element with start index 3
console.log("IndexOf 20 (start index 3):- ", numbers.indexOf(20, 3));
console.log("LastIndexOf 20 (start index -2):- ", numbers.lastIndexOf(20, -2));

// No-match result
console.log("IndexOf 50:- ", numbers.indexOf(50));