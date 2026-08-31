console.log("\nQues 3:- : Neeche expressions ke outputs predict karo aur difference explain karo. console.log(new Array(5));\nconsole.log([5]);\nconsole.log(Array.of(5));\n");
/* Requirements:
6. Har expression ka length batao.
7. Sparse array explain karo.
*/

// Explanation
console.log("Output:- \n 1. new Array(5) creates an array with 5 empty slots, so the output will be [ <5 empty items> ]. \n- new Array(number) → returns a new array of that length with empty slots (holes).\n 2. [5] creates an array with a single element 5, so the output will be [5]. \n- Array Literal ([]) → returns a new array with the given elements.\n 3. Array.of(5) also creates an array with a single element 5, so the output will be [5]. \n- Array.of(value) → returns a new array with exactly the elements passed.");

console.log("\nSparse array is an array that has empty slots, meaning it has a length but no actual values at those indices. It can lead to unexpected behavior when iterating over the array or performing operations on it.\n");

const ArrConstructor = new Array(5);
console.log("Array constructor method is used to create array first then enter elements in it.\nOutput:- ", ArrConstructor, "\nLength:- ", ArrConstructor.length);

const ArrLiteral = [5];
console.log("\nArray Literal \nOutput:- ", ArrLiteral, "\nLength:- ", ArrLiteral.length);

const ArrOf = Array.of(5);
console.log("\nArray of \nOutput:- ", ArrOf, "\nLength:- ", ArrOf.length);
