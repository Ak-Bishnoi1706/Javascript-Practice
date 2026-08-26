console.log("\nQues 8:- Given array se last element remove karo aur removed element store karo. \nconst nums = [10, 20, 30, 40]");

/* Requirements:_
19.	pop() use karo.
20.	Removed value batao.
21.	Updated array batao.
22.	Empty array par pop() explain karo. */

// Explanation
console.log("\n- The pop() method removes last element of an array and returns the removed item. \n- Pop method returns the removed element from the array. \n- In this case, after popping, the removed element will be 40 and the updated array will be [10, 20, 30].");

const nums = [10, 20, 30, 40];
const removed = nums.pop();
console.log("\nRemoved Item:-", removed);
console.log("Updated Array:-", nums, "Length:- ", nums.length);

// EMpty array pop() Explanation
console.log("\nEmpty array par pop() returns undefined because there is no element to remove.");
const emptyArr = [];
const removedFromEmpty = emptyArr.pop();
console.log("\nRemoved Item from empty array:-", removedFromEmpty);
console.log("Updated Empty Array:-", emptyArr, "Length:- ", emptyArr.length);
