/* Ques 41:- Explain karo flatMap() conceptually kin two operations ka combination hai aur uski limitation kya hai.

Requirements:
105. map behavior.
106. flat(1) behavior.
107. Deep flatten limitation.
 */

// Explanation
console.log("flatMap() is a combination of two operations: map() and flat(1). It first applies the mapping function to each element of the array, and then flattens the result by one level. ");

// Return value
console.log("👉 Return value: A new array with mapped results flattened by one level.");

// Map behavior
console.log("\nmap() function changes each element of the array based on the given function.");

// Flat(1) behavior
console.log("\nflat(1) removes one level of nested arrays, meaning it only flattens one step deep.");

// Deep flatten limitation
console.log("\nLimitation: flatMap() only flattens one level. If the mapping function returns arrays inside arrays, those deeper levels will not be flattened. For that, we need extra flattening methods.");

// Example
const original = [1, 2, 3];
const result = original.flatMap(x => x + 2);

console.log("\nOriginal Array:-", original); // Output: [1, 2, 3]
console.log("Result Array:-", result);       // Output: [3, 4, 5]

console.log("Are original and result arrays equal?", original === result); // Output: false