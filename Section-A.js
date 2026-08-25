/* INSTRUCTIONS:- 
    - firstly predict output urself -> verify by running code
    - do explain method selected to solve that ques */

//--------------------------------------------------------------------
console.log("Ques 1:- JavaScript Array kya hota hai? Explain karo ki Array ka use kyun hota hai aur JavaScript mein Array ko primitive value kyun nahi kaha jata?\n");
/* Requirements:
1.	Array ki definition do.
2.	0-based indexing explain karo.
3.	Ek real-world example do
 */

// DEFINITION
console.log("- Array is a list of different data types (string, array, number, etc) values which are stored in one variable, it is non-primitive data type because primitive values are those which store one value in it, but array stores multiple values and do have methods to change/mutate those values, elements in an array are stored in heap memory (Real array in heap, while references of elements in stack memory), basically it is an object in javascript useful to store similar type data in one variable, reduce code redundancy, easy to iterate over elements. \n")

// 0-BASED INDEXING
console.log("- Array uses 0-based indexing, meaning the first element is at index 0, the second at index 1, and so on. it is useful for making memory address calculation manageable and efficient.\n")

// Example
console.log("Real world Example:- A shopping cart in an e-commerce website, where multiple items can be added, removed, or updated at any position.\n");

const cart = ["item1", "item2", "item3"];
console.log("Shopping Cart Items:", cart);

console.log("----------------------------------------------------------------------------");
console.log("\nQues 2:- Array create karne ke kam se kam do ways explain karo. Array literal aur constructor ke examples likho.\n")
/* Requirements:
4.	Dono outputs explain karo.
5.	Normal application code mein preferred approach batao.
 */

// EXPLANATION
console.log("- There are two main ways to create an array in JavaScript: using array literals and using the Array constructor.\n");

//1. Array Literal
const numbers = [1, 2, 3, 4, 5];
console.log("Array (literals):- ", numbers);
//Output:- [1, 2, 3, 4, 5]
console.log("Array literal is the simplest and most common way. it directly creates an array with given elements.");

// 2. Array constructor
const alphabet = new Array("A", "B", "C");
console.log("Array (constructor):- ", alphabet);
//Output:- ["Apple", "Banana", "Cherry"]
console.log("Array constructor is less commonly used but provides more control over array creation.");

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 3:- : Neeche expressions ke outputs predict karo aur difference explain karo. console.log(new Array(5));\nconsole.log([5]);\nconsole.log(Array.of(5));\n");
/* Requirements:
6.	Har expression ka length batao.
7.	Sparse array explain karo.
*/

// Explanation
console.log("Output:- \n 1. new Array(5) creates an array with 5 empty slots, so the output will be [ <5 empty items> ].\n 2. [5] creates an array with a single element 5, so the output will be [5]. \n 3. Array.of(5) also creates an array with a single element 5, so the output will be [5].");

console.log("Sparse array is an array that has empty slots, meaning it has a length but no actual values at those indices. It can lead to unexpected behavior when iterating over the array or performing operations on it.\n");

const ArrConstructor = new Array(5);
console.log("Array constructor method is used to create array first then enter elements in it.\nOutput:- ", ArrConstructor, "\nLength:- ", ArrConstructor.length);

const ArrLiteral = [5];
console.log("\nArray Literal \nOutput:- ", ArrLiteral, "\nLength:- ", ArrLiteral.length);

const ArrOf = Array.of(5);
console.log("\nArray of \nOutput:- ", ArrOf, "\nLength:- ", ArrOf.length);

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 4:- : Given array se first, second aur last element access karo.\n const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];\n");
/* Requirements:
8.	First element nikalo.
9.	Second element nikalo.
10.	Last element nikalo using length.
*/
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

console.log("First element:- ", fruits[0]);
console.log("Second element:- ", fruits[1]);
console.log("Last element using length:- ", fruits[fruits.length - 1]);

// --------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 5:- Code ke baad length kya hogi? Actual present values kitni hongi? \nconst arr = []; \narr[3] = 'Javascript';");
/* Requirements:-
11.	arr.length predict karo.
12.	Present indexes identify karo.
13.	Hole vs undefined explain karo
*/

// Explanation
console.log("\n-When we write arr[3] = 'Javascript', the value is stored at index 3 which means the array length becomes 4 (because lenght is always the highest index + 1) \n-Only index 3 has a value, Indexes 0, 1, and 2 are empty slots(holes). \n-A hole is not the same as undefined. if we had written arr[0] = undefined, then index 0 would contain a real value undefined. but here, indexes 0-2 have nothing at all. so the output is like [ <3 empty items>, 'Javascript']");

const arr = [];
arr[3] = 'Javascript';
console.log("\n Output:-", arr, "length:-", arr.length);

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 6:- Explain karo ki typeof [] kya return karta hai aur reliable Array check kaunsa hai. \nconsole.log(typeof []); \nonsole.log(Array.isArray([])); \nconsole.log(Array.isArray({}));")

/* Requirements:_
14.	Outputs predict karo.
15.	Correct Array check explain karo.
*/

console.log("\n- Typeof [] returns 'object' because in Javascript arrays are considered as objects. \n- Array.isArray([]) returns true because it is a reliable method to check if a value is an array. \n- Array.isArray({}) returns false because {} is an object, not an array.");

console.log("\n Output:- ", "\ntypeof []:- ", typeof [], "\nArray.isArray([]):- ", Array.isArray([]), "\nArray.isArray({}):- ", Array.isArray({}));

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 7:- Given array mein do elements end mein add karo. push() kya return karta hai? \nconst numbers = [10, 20, 30];\n");

/* Requirements:_
16.	40 aur 50 add karo.
17.	Updated array batao.
18.	Return value identify karo.
*/

// Explanation
console.log("\n- The push() method adds one or more elements to the end of an array and returns the new length of the array.");

const NumBers = [10, 20, 30];
const updatedArr = NumBers.push(40, 50);
console.log("\n Output:-", NumBers, "New Length:-", updatedArr);

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 8:- Given array se last element remove karo aur removed element store karo. \nconst nums = [10, 20, 30, 40]");

/* Requirements:_
19.	pop() use karo.
20.	Removed value batao.
21.	Updated array batao.
22.	Empty array par pop() explain karo. */

// Explanation
console.log("\n- The pop() method removes last element of an array and returns the removed item.");

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

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 9:- shift() aur pop() ke beech difference explain karo.");

/* Requirements:-
23.	Kis side se remove karte hain?
24.	Return values explain karo.
25.	Empty array behavior compare karo.
*/

// Explanation
console.log("The pop() removes last element of an array (-1) whereas the shift removes first element of an array (element at 0th index) \n- both returns the removed item, \n- if the array is empty undefined is returned. ");

const Array9 = [1, 2, 3, 4, 5, 6];
const PopItem = Array9.pop();
const ShiftItem = Array9.shift();

console.log("Pop removed item:-", PopItem);
console.log("Shift removed item:-", ShiftItem);
console.log("Updated Array:-", Array9);

//--------------------------------------------------------------------
console.log("----------------------------------------------------------------------------");
console.log("\nQues 10:- Given array ke beginning mein 5 aur 10 add karo. Return value kya hogi? \nconst Numbers = [20, 30, 40]");

/* Requirement:-
26.	Updated array likho.
27.	Return value explain karo.
*/

// Explanation
console.log("We will use unshift() method to add elements in beginning of array and it returns the new lenght of array, so the updated array will be -> [5, 10, 20, 30, 40] LENGTH -> 5");

const Numbers = [20, 30, 40];
const newLength = Numbers.unshift(5, 10);

console.log("Updated Array:-", Numbers, "Return value (Lenght):_", newLength);

