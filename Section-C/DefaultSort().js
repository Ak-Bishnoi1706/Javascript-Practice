/*Ques 32:- Default numeric sort surprising kyun hota hai?
const numbers=[10,2,30,4];
console.log(numbers.sort());

Requirements:
81. Output predict.
82. Reason.
83. Correct numeric sort.
*/

// Code Solution
const numbers = [10, 2, 30, 4];
console.log("Default Sort:-", numbers.sort()); // Output: [10, 2, 30, 4]

// Correct Sorting
console.log("\nCallback Sorting:-", numbers.sort((a, b) => a - b));

// Explanation
console.log("\nOutput :- The output of the sort() method is [10, 2, 30, 4]. This is because the default sort() method sorts elements as strings, not numbers. When sorting as strings, '10' comes before '2' because it compares the first character of each string ('1' vs '2').\n\nCorrect Numeric Sort:- To sort numbers correctly, we can provide a compare function to the sort() method. For example:\n\nconst correctSort = numbers.sort((a, b) => a - b);\nconsole.log(correctSort); // Output: [2, 4, 10, 30]\n\nThis compare function subtracts b from a, which sorts the numbers in ascending order.\n");

/* SORT - Sort used to arrange array elements in ascending or descending order and return the sorted array.
Syntax:- array.sort([compareFunction])
- Default behavior: Sorts elements as strings */