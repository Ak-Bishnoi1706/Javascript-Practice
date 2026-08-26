/* QUES 11:- Index 1 se two elements remove karo aur original/returned arrays identify karo.
const items = ['A','B','C','D','E'];

Requirements:
Correct splice call likho.
Updated array batao.
Removed array batao.
*/

// Explanation
console.log("Splice method is used to modify the original array elements. Its changes (remove, add, replace) directly apply on the original array. \nSyntax:- \narray.splice(start, deleteCount, item1, item2...) \n- Start = index of element from which the operation should start \n- DeleteCount = number of elements to delete \n- item1/item2 = elements to add \n- It modifies the original array and → returns a new array containing the removed elements.");

// Splice call
const items = ['A','B','C','D','E'];

console.log("\nRemoved Array:- ", items.splice(1, 2)); // removed array :- ['B', 'C']
console.log("Updated Array:- ", items); // modified array :- ['A', 'D', 'E']
