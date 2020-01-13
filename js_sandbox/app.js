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

// // Variables and Declarations

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

// NUMBERS AND THE MATH OBJECT

const num1 = 140;
const num2 = 40;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//  Math object
val = Math.PI;
val = Math.E;
val = Math.round(4.5); //5
val = Math.ceil(2.4); //3
val = Math.floor(2.6); //2
val = Math.sqrt(9); //3
val = Math.abs(-4); //4
val = Math.pow(8, 2); //64
val = Math.min(2, 44, 5, 3);
val = Math.max(45, 33, 2);
val = Math.floor(Math.random() * 20);

console.log(val);
