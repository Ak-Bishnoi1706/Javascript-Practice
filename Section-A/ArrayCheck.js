console.log("\nQues 6:- Explain karo ki typeof [] kya return karta hai aur reliable Array check kaunsa hai. \nconsole.log(typeof []); \nconsole.log(Array.isArray([])); \nconsole.log(Array.isArray({}));")

/* Requirements:_
14. Outputs predict karo.
15. Correct Array check explain karo.
*/

console.log("\n- typeof [] returns 'object' because in JavaScript arrays are considered as objects. \n- typeof → returns a string describing the type of the operand.\n- Array.isArray([]) returns true because it is a reliable method to check if a value is an array. \n- Array.isArray(value) → returns true if the value is an array, else false.\n- Array.isArray({}) returns false because {} is an object, not an array.");
 
console.log("\n Output:- ", "\ntypeof []:- ", typeof []);
console.log("Array.isArray([]):- ", Array.isArray([]));
console.log("Array.isArray({}):- ", Array.isArray({}));

const arr = [1, 2, 3];
console.log(Array.isArray(arr));
console.log(Array.isArray([2]));