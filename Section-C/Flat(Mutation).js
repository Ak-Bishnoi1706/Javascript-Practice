/*Ques 40:- Prove karo ki flat() original array ko mutate karta hai ya new array return karta hai.
const original=[1,[2,3]];
const result=original.flat();

Requirements:
102. original/result compare.
103. Reference equality check.
*/

// Code Solution
const original = [1, [2, 3]];
const result = original.flat();

console.log("Original Array:-", original); // Output: [1, [2, 3]]
console.log("Result Array:-", result); // Output: [1, 2, 3]

// Compare original and result arrays
console.log("Are original and result arrays equal?", original === result); // Output: false

/* Explanation: The original array remains unchanged, and the result is a new array. The reference equality check confirms that they are not the same object in memory. */