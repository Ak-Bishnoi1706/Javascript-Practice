console.log("\nQues 4:- : Given array se first, second aur last element access karo.\n const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];\n");
/* Requirements:
8.	First element nikalo.
9.	Second element nikalo.
10.	Last element nikalo using length.
*/
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// Bracket notation -> returns the value at that index
console.log("First element:- ", fruits[0]);
console.log("Second element:- ", fruits[1]);

// method 1:- Using length property (Traditional Way)
console.log("Last element using length:- ", fruits[fruits.length - 1]);

// method 2:- Using negative index (ES2022 feature)
console.log("Last element using negative index:- ", fruits.at(-1));

// Explanation
console.log("Array in Javascript use 0-based indexing. SO the first element is at index 0, second at 1 and the last one can be accessed with arr.[arr.length - 1]. In modern JS, .at(-1) is a cleaner way.")