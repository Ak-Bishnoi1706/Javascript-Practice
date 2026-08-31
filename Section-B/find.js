/* Ques 23:- Users mein id 3 wala first user find karo.
const users = [{id:1,name:'Ali'},{id:3,name:'Sara'},{id:3,name:'John'}];

Requirements:
59. find() method use karo.
60. Returned user.
61. No-match result explain karo.
*/

// Explanation
console.log("Find:- Find means to search for an element in the array.\n- It returns the value of the first element in the array that satisfies the provided testing function.\n- If no values satisfy the testing function, undefined is returned. \n- Syntax:- array.find(callback(element, index, array), thisArg) \n- callback:- Function to execute on each value in the array. It takes three arguments: element, index, and array. \n- thisArg:- Optional. Value to use as this when executing callback.\n");
console.log("@param predicate\n find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.\n");

// Code
const users = [{id:1,name:'Ali'},{id:3,name:'Sara'},{id:3,name:'John'}];

// Find the first user with id 3
const userWithId3 = users.find(u => u.id === 3);
console.log("Returned User:- ", userWithId3);

// No-match result
const NoMatchResult = users.find(u => u.name === "anita");
console.log("No valuee found Returns:- ", NoMatchResult);