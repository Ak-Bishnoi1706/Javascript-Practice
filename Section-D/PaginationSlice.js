/* Ques 50:- 25 items ki array mein page size 5 hai. Page 3 ke items slice() se nikalo.
const items=Array.from({length:25},(_,i)=>i+1);
const page=3;
const pageSize=5;

Requirements:
- Start-index formula.
- End-index formula.
- Page 3 output.
*/

const items = Array.from({ length: 25 }, (_, i) => i + 1); // [1,2,3,...,25]
const page = 3;
const pageSize = 5;

// Formula for start index
const startIndex = (page - 1) * pageSize; // (3-1)*5 = 10

// Formula for end index
const endIndex = startIndex + pageSize;   // 10+5 = 15

// slice() extracts items from startIndex to endIndex (end not included)
const pageItems = items.slice(startIndex, endIndex);

console.log("Page 3 Items:-", pageItems);

// Expected Output
// [11, 12, 13, 14, 15]

// Explanation
/*
- Start-index formula: (page - 1) * pageSize
   → For page 3: (3-1)*5 = 10
- End-index formula: startIndex + pageSize
   → 10 + 5 = 15
- slice(10,15) → returns items at positions 10 to 14 (0-based indexing).
- So Page 3 contains items [11,12,13,14,15].
- Original array remains unchanged because slice() is non-mutating.
*/
