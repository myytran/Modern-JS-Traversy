//log to console
console.log('hello world');
console.log(123);
console.log(true);
var greeting = 'hello';
console.log(greeting);

//array
console.log([1, 2, 3, 4]);

//object literal
console.log({ a: 1, b: 2, c: 3 });
//print out object in form of a table
console.table({ a: 1, b: 2, c: 3 });

//consoles and shows where error occurs in code
console.error('this is some error');

//clear console
console.clear();
console.warn('this is a warning');

//Timer for selected code ran
console.time('hello');
console.log(123);
console.log(123);
console.log(123);
console.log(123);
console.timeEnd('hello');
