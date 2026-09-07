/* Ques 37:- Nested array ko default flat() se flatten karo.
const data = [1, [2, 3], [4, [5, 6]]];

Requirements:
95. Output.
96. Nested array kyun remain?
*/

// Code solution
const data = [1, [2, 3], [4, [5, 6]]];
const flattened = data.flat();
console.log("Flattened Array:-", flattened); 
// Output: [1, 2, 3, 4, [5, 6]]

// Flat Method - default depth = 1
console.log("Flat Method flattens the array to a specified depth.");
console.log("- Returns a new array with sub-arrays concatenated.");
console.log("- By default, it flattens only one level deep.");
console.log("- It is a non-destructive method (original array not changed).");

console.log("Original Array after Flat:-", data); 
// Output: [1, [2, 3], [4, [5, 6]]]

/* 🔹 Why Nested Array Remains?
   - Default depth = 1 → only first-level sub-arrays are flattened.
   - In [4, [5, 6]], the outer [4, [5, 6]] is flattened → gives 4 and [5, 6].
   - But [5, 6] is a second-level array → not flattened because depth = 1.
*/

/* 🔹 Depth Brief:
   - flat(1) → flattens one level (default).
   - flat(2) → flattens two levels.
   - flat(Infinity) → flattens all levels until no nested arrays remain.
*/

/* 🔹 Examples:
   1. Default depth (flat()) → [1, 2, 3, 4, [5, 6]]
   2. Specified depth (flat(2)) → [1, 2, 3, 4, 5, 6]
   3. Infinite depth (flat(Infinity)) → [1, 2, 3, 4, 5, 6]
   4. Sparse arrays → removes empty slots automatically
*/

/* 🔹 USE-CASE:
   - Flattening nested arrays for easier data manipulation.
   - Cleaning up sparse arrays for processing.
   - Preparing data for APIs, database storage, or visualization.
*/
