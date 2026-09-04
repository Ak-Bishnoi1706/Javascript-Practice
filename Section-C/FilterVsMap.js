/*Ques 31:- Active products ke names return karo.
const products=[{name:'Laptop',active:true},{name:'Mouse',active:false},{name:'Keyboard',active:true}];

Requirements:
78. Chain likho.
79. Output batao.
80. Order explain karo.
 */

// Code Solution
const products = [
    {name: 'Laptop', active: true},
    {name: 'Mouse', active: false},
    {name: 'Keyword', active: true}
];

// Filter to get active products
const names = products.filter(n => n.active === true).map(n => n.name);
console.log(names);

// Explanation
console.log("\nFilter:- Filter means to create a new array with all elements that pass the test implemented by the provided function.\n-Map:- Map means to create a new array by applying a function to each element of the original array.\n-Chain:- In this case, we first filter the products to get only the active ones and then map their names to create a new array of names.\n-Order:- The order of operations is important here. We first filter the products to get only the active ones and then map their names to create a new array of names.\n");
