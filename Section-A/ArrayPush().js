console.log("\nQues 7:- Given array mein do elements end mein add karo. push() kya return karta hai? \nconst numbers = [10, 20, 30];\n");

/* Requirements:_
16.	40 aur 50 add karo.
17.	Updated array batao.
18.	Return value identify karo.
*/

// Explanation
console.log("\n- The push() method adds one or more elements to the end of an array and returns the new length of the array. \n- Push method returns the updated length of the array after adding the new elements. \n- In this case, after pushing 40 and 50, the new length will be 5.");

const NumBers = [10, 20, 30];
const updatedArr = NumBers.push(40, 50);
console.log("\n Output:-", NumBers, "New Length:-", updatedArr);