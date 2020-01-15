// //log to console
// console.log('hello world');
// console.log(123);
// console.log(true);
// var greeting = 'hello';
// console.log(greeting);

// //array
// console.log([1, 2, 3, 4]);

// //object literal
// console.log({ a: 1, b: 2, c: 3 });
// //print out object in form of a table
// console.table({ a: 1, b: 2, c: 3 });

// //consoles and shows where error occurs in code
// console.error('this is some error');

// //clear console
// console.clear();
// console.warn('this is a warning');

// //Timer for selected code ran
// console.time('hello');
// console.log(123);
// console.log(123);
// console.log(123);
// console.log(123);
// console.timeEnd('hello');

//////////////////////////////////////////////////

// VARIABLES AND DECLARATIONS

// //  var, let, const

// var name = 'John Doe';
// console.log(name);

// //you can reassign variables when you use var or let

// //init var
// var greeting;
// console.log(greeting); //Undefined
// greeting = 'Hello';
// console.log(greeting); //Hello

// LET
// let name = 'John Doe';
// console.log(name); //John Doe
// name = 'Steve Smith';
// console.log(name); //Steve Smith

// CONST [can't change or be reassigned]
// have to assign a value

/////////////////////////////////////////////////

//PRIMITIVE TYPES

// //string
// const name = 'John Doe';

// //number
// const age = 46;

// //Boolean
// const hasKids = true;

// //null
// const car = null;

// //undefined
// let test;

// //Symbol
// const sym = Symbol();

// // REFERENCE TYPES
// //array
// const hobbies = ['movies', 'music'];

// //object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// };
// const today = new Date();

// console.log(today);
// console.log(typeof today);

////////////////////////////////////////////

// TYPE CONVERSION

// let val;
// //number to string
// val = String(555);
// val = String(4 + 4);

// //boolean to string
// val = String(true);

// //Date to string
// val = String(new Date());

// // Array to string
// val = String([1, 2, 3, 4]);

// // toString() method

// val = (5607987).toString();
// val = true.toString();

// //String to number
// val = Number('6');
// val = Number(true); //1
// val = Number(false); //0
// val = Number(null); //0

// val = parseInt('299.4'); //299
// val = parseFloat('299.4'); //299.4

// // output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed());

// const val1 = String('8');
// const val2 = 9;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

///////////////////////////////////////////////////

// NUMBERS AND THE MATH OBJECT

// const num1 = 140;
// const num2 = 40;
// let val;

// //Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //  Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(4.5); //5
// val = Math.ceil(2.4); //3
// val = Math.floor(2.6); //2
// val = Math.sqrt(9); //3
// val = Math.abs(-4); //4
// val = Math.pow(8, 2); //64
// val = Math.min(2, 44, 5, 3);
// val = Math.max(45, 33, 2);
// val = Math.floor(Math.random() * 20);

// console.log(val);

// STRING METHODS AND CONCATENATION

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 30;
// const str = 'hello there my name is My';

// let val;

// val = firstName + lastName;

// //concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'My ';
// val += 'Tran'; // My Tran

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = "That's awesome, I can't wait"; // double quotes or \ before single quote

// // Length
// val = firstName.length;

// // concat method
// val = firstName.concat(' ', lastName); // William Johnson

// //Change case
// val = firstName.toUpperCase(); //WILLIAM
// val = firstName.toLowerCase(); // william

// val = firstName[3]; //l
// val = firstName[0]; //W

// // indexOf()
// val = firstName.indexOf('i'); //1
// val = firstName.lastIndexOf('a'); //5

// // charAt()
// val = firstName.charAt('2'); //l
// // get last character
// val = firstName.charAt(firstName.length - 1); //common formula

// // Substring()
// val = firstName.substring(0, 4); //Will

// // Slice
// val = firstName.slice(0, 4); //Will
// val = firstName.slice(-3); //iam

// //Split()
// val = str.split(' '); // splits array by space

// //replace
// val = str.replace('My', 'Jack'); // hello there my name is Jack

// // includes()
// val = str.includes('help'); //false

// console.log(val);

// TEMPLATE LITERALS

// const name = 'My';
// const age = 36;
// const job = 'Web developer';
// const city = 'Washington';
// let html;

// //Without template strings (es5)
// html =
//   '<ul><li>Name: ' +
//   name +
//   '</li><li>Age: ' +
//   age +
//   '</li><li>Job: ' +
//   job +
//   '</li><li>City: ' +
//   city +
//   '</li></ul>';

// function hello() {
//   return 'hello';
// }

// // Template Strings//Template Literals
// html = `
//   <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>

//   `;

// document.body.innerHTML = html;

////////////////////////////////////////////////////////

//ARRAYS AND ARRAY METHODS

//creating some arrays
const numbers = [37, 78, 92, 4];
const numbers2 = new Array(34, 32, 77, 23);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 3 }, new Date()];

// let val;

// // get array length
// val = numbers.length;
// //check if is array
// val = Array.isArray(numbers); //true
// //get single value
// val = numbers[3]; //4
// //Insert into array
// numbers[2] = 100;
// //find index of value
// val = numbers.indexOf(78); //1

// // Mutating arrays
// // add on to end
// numbers.push(67); //[37, 78, 92, 4, 67]
// // add on to front
// numbers.unshift(90); //[90, 37, 78, 92, 4, 67]
// //take off from end
// numbers.pop(); //[90, 37, 78, 92, 4]
// //take off from front
// numbers.shift(); // [37, 78, 92, 4]
// //splice values
// numbers.splice(1, 2);
// //reverse array
// numbers.reverse(); //[4, 37]
// //concatenate array
// val = numbers.concat(numbers2);
// //sort
// val = fruit.sort();
// val = numbers.sort();

// //use the compare functions
// val = numbers.sort(function(x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y) {
//   return y - x;
// });

//find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

/////////////////////////////////////////////////////

// OBJECT LITERALS

// const person = {
//   firstName: 'My',
//   lastName: 'Tran',
//   age: 30,
//   email: 'mytran@aol.com'
// };

// let val;
// val = person;

//get specific value
// val = person.email; // My

// console.log(val);

// // objects
// const people = [
//   { name: 'Jon', age: 29 },
//   { name: 'Rory', age: 36 },
//   { name: 'My', age: 29 }
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }
///////////////////////////////////////////////////

// let val;

// const today = new Date();

// val = today;

// console.log(val);

//////////////////////////////////////////////////////////
// IF STATEMENTS & COMPARISION OPERATORS

// const id = 100;

// //equal to
// if (id == 100) {
//   console.log('correct'); //correct
// } else {
//   console.log('incorrect');
// }

// //not equal to
// if (id != 100) {
//   console.log('correct'); //incorrect
// } else {
//   console.log('incorrect');
// }

// //equal to value and type
// //if id is a string then this is incorrect because it doesn't not match in type
// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// //not equal to value and type
// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

//TEST IF UNDEFINED
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

//TEST IF SOMETHING IS GREATER OR LESSER THAN
// if (id > 200) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// IF ELSE

// const color = 'purple';

// if (color === 'red') {
//   console.log('color is red');
// } else if (color === 'blue') {
//   console.log('color is blue');
// } else {
//   console.log('color is not red or blue');
// }

// LOGICAL OPERATORS
// const name = 'Steve';
// const age = 20;

// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is a adult`);
// }

// // OR
// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in a race`);
// } else {
//   console.log(`${name} is not registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'Correct' : 'Incorrect'); //incorrect

// // WITHOUT BRACES
// if (id === 100) console.log('correct');
// else console.log('Incorrect');

//////////////////////////////////////////////

// SWITCHES - validates conditions; use Switch when working with a project with lots of conditionals, it keeps it cleaner.
// const color = 'purple';

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

////////////////////////////////////////////////////////

// FUNCTION DECLARATIONS

function greet(firstName = 'Rory', lastName = 'Staunton') {
  return 'hi ' + firstName + ' ' + lastName;
}

//console.log(greet('Rory', 'Staunton'));

//FUNCTION EXPRESSION

const square = function(x) {
  return x * x;
};

// console.log(square(8));

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs; a function that you declare and run at the same time.

// (function(name) {
//   console.log('hello ' + name);
// })('brad');

//PROPERTY METHODS

const todo = {
  add: function() {
    console.log('adding');
  },
  subtract: function() {
    console.log('subtracting');
  },
  multiply: function() {
    console.log('multiplying');
  }
};

todo.add(23);
todo.subtract(6);
todo.multiply(8);
