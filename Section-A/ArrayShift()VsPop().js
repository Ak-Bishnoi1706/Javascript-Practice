console.log("\nQues 9:- shift() aur pop() ke beech difference explain karo.");

/* Requirements:-
23.	Kis side se remove karte hain?
24.	Return values explain karo.
25.	Empty array behavior compare karo.
*/

// Explanation
console.log("The pop() removes last element of an array (-1) whereas the shift removes first element of an array (element at 0th index) \n- both returns the removed item, \n- if the array is empty undefined is returned. \n- pop() is faster than shift() because shift() needs to re-index the remaining elements in the array after removing the first element. ");

const Array9 = [1, 2, 3, 4, 5, 6];
const PopItem = Array9.pop();
const ShiftItem = Array9.shift();

console.log("Pop removed item:-", PopItem);
console.log("Shift removed item:-", ShiftItem);
console.log("Updated Array:-", Array9);