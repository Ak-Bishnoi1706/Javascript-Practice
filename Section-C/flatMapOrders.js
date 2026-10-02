/* Ques 45:- Har order ke items ko single array mein convert karo.
const orders=[
  {id:1,items:['Laptop','Mouse']},
  {id:2,items:['Keyboard']},
  {id:3,items:['Monitor','HDMI Cable']}
];

Requirements:
- flatMap solution.
- Expected output.
*/

const orders = [
  { id: 1, items: ['Laptop', 'Mouse'] },
  { id: 2, items: ['Keyboard'] },
  { id: 3, items: ['Monitor', 'HDMI Cable'] }
];

// flatMap solution
// Step 1: Each order object has an "items" array.
// Step 2: flatMap() extracts items from each order and flattens them into one big array.
const result = orders.flatMap(order => order.items);

console.log("Final Result:-", result);

// Expected Output
// ["Laptop", "Mouse", "Keyboard", "Monitor", "HDMI Cable"]

// Explanation
/*
- Each order contains an array of items.
- flatMap() is used to pull out those items from all orders.
- It automatically flattens the arrays into a single array.
- So instead of nested arrays like [["Laptop","Mouse"],["Keyboard"],["Monitor","HDMI Cable"]],
  we directly get ["Laptop","Mouse","Keyboard","Monitor","HDMI Cable"].
- Return used: order.items → returns the items array for each order.
*/
