// Functions - Build a calculator

/*
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));
*/

// Arrays - Shopping List
/*
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push(" Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push(" Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push(" Popcorn", " Beef Jerky", " Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.")

shoppingList.pop();

console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake ");
console.log(getShoppingListMsg(shoppingList));
*/

// Objects - Build a Recipe Tracker

/*
const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return total / ratings.length;
}

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients)
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime) 

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients)
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime)

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)

console.log(recipes);

// https://youtu.be/sG49DbdOSgU?si=DQDWc-9noZTl8JWl&t=2305 <= see this video for the answers

*/

// JS Loops: Build a Sentence Analyzer
/*
function getVowelCount(sentence) {
  // 1) Find the a, e, i, o, and u are the vowels in the a sentence

  // 2) Put the totals into an array?

  // 3) You have an array of numbers, and you want to calculate their sum.

  // const numbers = [1, 2, 3, 4, 5];
  // const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  // console.log(sum); // Output: 15

}
  */

//Higher Order Functions & Callbacks: Build a Library Manager

const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

console.log("Books in the Library:\n");

// Function using String Concatenation:

// function getBookInformation(catalog) {
//   return catalog.map(book => book.title + 'by ' + book.author);
// }

// Function using string literal:

function getBookInformation(catalog) {
  return (catalog.map((book) => `${book.title} by ${book.author}`)).join("\n");
}

console.log(getBookInformation(library));
