/*Ques 34:- Products ko price ascending sort karo.
const products=[{name:'Laptop',price:60000},{name:'Mouse',price:1200},{name:'Monitor',price:15000}];

Requirements:
87. Comparator.
88. Expected order.
  */

// Code Solution
const products = [
  { name: 'Laptop', price: 60000 },
  { name: 'Mouse', price: 1200 },
  { name: 'Monitor', price: 15000 }
];

console.log(products.sort((a, b) => a.price - b.price));
console.log("Order:- ", products);

// Explanation of Ascending Sort
console.log("\nExplanation:- In the ascending sort, the compare function (a.price - b.price) returns a positive value when a.price > b.price, which means a comes after b in the sorted array. Conversely, it returns a negative value when a.price < b.price, meaning a comes before b.");
