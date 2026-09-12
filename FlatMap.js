/* Ques 41:- Explain karo flatMap() conceptually kin two operations ka combination hai aur uski limitation kya hai.

Requirements:
105. map behavior.
106. flat(1) behavior.
107. Deep flatten limitation.
 */

// Explanation
console.log("flatMap() is a combination of two operations: map() and flat(1). It first applies the mapping function to each element of the array, and then flattens the result by one level. However, it has a limitation in that it only flattens one level deep, so if the mapping function returns nested arrays, those will not be fully flattened.");

// Map behavior
console.log("\nThe map() function transforms each element of the array based on the provided mapping function.");

// Flat(1) behavior
console.log("\nThe flat(1) function flattens the array by one level, meaning it will only remove one level of nested arrays.");

// Deep flatten limitation
console.log("\nThe limitation of flatMap() is that it only flattens one level deep. If the mapping function returns nested arrays, those will not be fully flattened, and we may need to use additional flattening methods if deeper flattening is required.");

// Example
const original = [1, 2, 3];
const result = original.flatMap(x => x + 2);
console.log("\nOriginal Array:-", original); // Output: [1, 2, 3]
console.log("Result Array:-", result); // Output: [2, 4, 6]

console.log("Are original and result arrays equal?", original === result); // Output: false