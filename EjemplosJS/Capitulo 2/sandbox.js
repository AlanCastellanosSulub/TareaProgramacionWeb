//Part 1
//alert('hello word')
//Part2
/*console.log(1);
console.log(2);*/
/*let age=25;
let year=2019*/

//log things to console
/*console.log(age,year);

age = 30;
console.log(age);

const points =100;
console.log(points);

var score=75 ;
console.log(score);*/

//Part 3
// strings
/*console.log('hello, world');

let email = 'adjcastellanos@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Alan';
let lastName = 'de Jesus';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);*/

//Part 4
// common string methods
/*
let email = 'mario@thenetninja.co.uk';

//let result = email.lastIndexOf('n');

//let result = email.slice(0,5);

//let result = email.substr(5,12);

//let result = email.replace('m', 'w');

let result = email.replace('n', 'w');

console.log(result);*/

//Part5
// numbers
/*
let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let result = 'the blog has ' + likes + ' likes.';
console.log(result);*/


//Part 6
// template strings
/*const title = 'Best reads of 2019';
const author = 'Alan';
const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);*/

//Part 7
// arrays
/*
let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array length
// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken');
let result = ninjas.pop();

console.log(result);
console.log(ninjas);*/

//Part 8

// null & undefined
/*let age = null;

console.log(age, age + 3, `the age is ${age}`);*/

//Part 9 
// booleans & comparisons
// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'adjcastellanos@gmail.com';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);

// comparison operators
/*let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');*/

//Part 10
//let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//Part 11
// type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
let result = Boolean('');

console.log(result, typeof result);