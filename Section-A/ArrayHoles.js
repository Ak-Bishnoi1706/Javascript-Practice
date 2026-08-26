console.log("\nQues 5:- Code ke baad length kya hogi? Actual present values kitni hongi? \nconst arr = []; \narr[3] = 'Javascript';");
/* Requirements:-
11. arr.length predict karo.
12. Present indexes identify karo.
13. Hole vs undefined explain karo
*/

// Explanation
console.log("\n- When we write arr[3] = 'Javascript', the value is stored at index 3 which means the array length becomes 4 (because length is always the highest index + 1). \n- Only index 3 has a value, Indexes 0, 1, and 2 are empty slots (holes). \n- A hole is not the same as undefined. If we had written arr[0] = undefined, then index 0 would contain a real value undefined. But here, indexes 0–2 have nothing at all. So the output is like [ <3 empty items>, 'Javascript' ]. \n- Array.length → returns the total number of slots (highest index + 1), including holes.");
 
const arr = [];
arr[3] = 'Javascript';
console.log("\n Output:-", arr, "length:-", arr.length);
