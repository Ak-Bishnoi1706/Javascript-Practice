console.log("\nQues 10:- Given array ke beginning mein 5 aur 10 add karo. Return value kya hogi? \nconst Numbers = [20, 30, 40]");

/* Requirement:-
26.	Updated array likho.
27.	Return value explain karo.
*/

// Explanation
console.log("We will use unshift() method to add elements in beginning of array and it returns the new length of array, so the updated array will be -> [5, 10, 20, 30, 40] LENGTH -> 5. \n- The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.");

const Numbers = [20, 30, 40];
const newLength = Numbers.unshift(5, 10);

console.log("Updated Array:-", Numbers, "Return value (Length):_", newLength);