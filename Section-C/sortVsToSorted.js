/*Ques 35:- Mutation ke perspective se difference explain karo.
const numbers=[3,1,2];\
const sorted=numbers.toSorted((a,b)=>a-b);

Requirements:
89. numbers value.
90. sorted value.
91. Immutable state ke liye safer method.
*/

// Code Solution
const numbers = [3, 1, 2];
const sorted = numbers.toSorted((a, b) => a - b);
console.log('Sorted Array:- ', sorted);
console.log("Orginal Array:- ", numbers);

// Explanation
console.log("\nToSorted mehtod used to arrange elements in ascending or descending order without changin the orginal array and it returns a new sorted array. It is an immutable method, which means it does not modify the original array. In contrast, the sort() method sorts the array in place, modifying the original array. Therefore, toSorted is a safer method for maintaining an immutable state.");