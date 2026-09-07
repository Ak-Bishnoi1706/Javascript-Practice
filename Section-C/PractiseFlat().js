/* Ques 37.1:- News Feed App Scenario
You are building a news feed app. 
Requirements:
- Latest articles should appear at the top (reverse order).
- Some articles are grouped in nested arrays (need flattening).
- Original data should remain unchanged (immutability important).

Tasks:
1. Flatten the nested array of articles (default depth).
2. Show the feed in reverse order without mutating original.
*/

const articles = [
  ["Article A", "Article B"], 
  ["Article C", ["Article D", "Article E"]],
  "Article F"
];

// Step 1: Flatten the articles array (default depth = 1)
const flattenedArticles = articles.flat();

// Step 2: Reverse the feed immutably
const feed = flattenedArticles.toReversed();

console.log("Flattened Articles:", flattenedArticles);
// Expected: ["Article A", "Article B", "Article C", ["Article D", "Article E"], "Article F"]

console.log("Final Feed (Latest First):", feed);
// Expected: ["Article F", ["Article D", "Article E"], "Article C", "Article B", "Article A"]

console.log("Original Articles Array after Operations:", articles);

/* const articles = [
   ["Article A", "Article B"], 
  ["Article C", ["Article D", "Article E"]],
  "Article F"
]; 

    - 1st array:- [[], [[]],  "F"];
    - 2nd array:- [[" A", "B"], [[]], "F"];
    - 3rd array:- [["A", "B"], ["C", []], "F"];
    - 4rth array:- [["A", "B"], ["C", ["D", "E"]], "F"];

    - 1st Level Arrays:- [["A", "B"], ["C", []], "F"];
    - 2nd Level Arrays:- [[], [["D", "E"]]];

    - 1st Level Flattened:- ["A", "B", "C", ["D", "E"], "F"];
    */

// Deep Nested Arrays (Depth 3) Example:
const arr = [1, 
  [2, 3], 
  [4, 
    [5, 6, 
      [7, 
        [8, 9]]
      ]
    ]
  ];

  const flattenedArr = arr.flat(3);
  console.log("Flattened Array (Depth 3):-", flattenedArr);

  // Flat (Infinity) Example:
  const deeplyNestedArr = [1, 
    [2, 
      [3, 
        [4, [5]]
        ]
      ]
    ];
  const fullyFlattened = deeplyNestedArr.flat(Infinity);
  console.log("Fully Flattened Array (Infinity):-", fullyFlattened);