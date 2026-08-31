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
