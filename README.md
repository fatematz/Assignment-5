# 1️⃣ What is the difference between var, let, and const?

Difference between var, let, and const :

1/ var is function scoped. It can be re-declared and updated. It is hoisted and initialized with undefined. It is mostly used in older JavaScript.

2/ let is block scoped. It cannot be re-declared in the same scope, but it can be updated. 

3/ const is also block scoped. It cannot be re-declared or updated. A const variable must be initialized at the time of declaration.


# 2️⃣ What is the spread operator (...)?

The spread operator (...) in JavaScript is used to spread or expand the elements of an array or object. It helps to copy, combine, or pass values easily in different places of the code. This operator makes the code shorter and easier to read.

# Exm:
 let a = [2, 4, 5];
let b = [...a];

console.log(b); 
Output: [2, 4, 5]

# 3️⃣ What is the difference between map(), filter(), and forEach()?

map(), filter(), and forEach() are JavaScript array methods used to work with array elements, but they have different purposes.

map() is used to create a new array by transforming each element of the original array. It returns a new array with modified values.

# Exm:
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num * 2);

console.log(result); 
Output: [2, 4, 6, 8]


filter() is used to create a new array with elements that match a condition. It only keeps the elements that pass the test.

# Exm: 
let numbers = [1, 2, 3, 4, 5];

let result = numbers.filter(num => num > 3);

console.log(result);
Output: [4, 5]

forEach() is used to loop through each element of an array, but it does not return a new array. It is mainly used when you want to perform an action like printing values or updating something.

# Exm:
let numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});



# 4️⃣ What is an arrow function?

An arrow function is a simple and short way to write a function in JavaScript. It uses the => symbol instead of the function keyword. Arrow functions make the code shorter and easier to understand, especially when writing small functions or callbacks.


# 5️⃣ What are template literals?

Template literals are a way to write strings in JavaScript using backticks ( ` ` ) instead of single or double quotes. They allow you to insert variables or expressions inside a string easily using ${ }. This makes the code cleaner and easier to read when combining text and variables.

# Exm:
let name = "Zohura";
let message = `Hello, my name is ${name}`;

console.log(message);