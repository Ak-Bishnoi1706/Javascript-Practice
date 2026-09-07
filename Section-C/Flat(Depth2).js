/* Ques 38:- Same array ko flat(2) se flatten karo.
const data = [1, [2, 3], [4, [5, 6]]];

Requirements:
97. Output.
98. Default flat se difference.
*/

// Code solution
const data = [1, [2, 3], [4, [5, 6]]];

const FlattenData2 = data.flat(2);
console.log("Flattened Array (Depth 2):- ", FlattenData2);
// Output: [1, 2, 3, 4, 5, 6]

console.log("\nFlat(depth 2) means it concatenates two-level arrays, so nested arrays inside depth 1 arrays also get flattened.");

/* 🔹 Depth Brief:
   - flat(1) → flattens one level (default).
   - flat(2) → flattens two levels (this ques as an example).
   - flat(Infinity) → flattens all levels until no nested arrays remain.
*/

/* 🔹 Flat Mechanism:
   - Iterates through parent array elements.
   - If element is an array → its items are merged into parent (up to given depth).
   - Returns a new array, does not change the original.
*/

/* 🔹 Shallow vs Deep Copy:
   - flat() creates a **shallow copy** of the array.
   - Nested objects or arrays are not deeply cloned, only references are copied.
   - Example: if elements are objects, changes in the flattened array reflect in original objects.
*/

/* 🔹 Reference Behavior:
   - flat() returns a **new array** (not the same reference).
   - Example: FlattenData2 === data → false
*/

/* 🔹 Difference from Default flat():
   - flat(1) → [1, 2, 3, 4, [5, 6]]
   - flat(2) → [1, 2, 3, 4, 5, 6]
   - So depth decides how many nested levels are flattened.
*/

/* 🔹 Key Points:
   - Mutability: flat() is non-destructive (original array unchanged).
   - Depth awareness: default = 1, customizable.
   - Shallow copy: references of objects remain same, not deep cloned.
   - Use-cases: Flattening nested arrays for APIs, cleaning sparse arrays, preparing tabular data.
   - Performance note: flat(Infinity) can be costly for very large arrays.
*/
