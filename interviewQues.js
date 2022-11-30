// compare 2 arrays

// whenever we compare 2 arrays so it compares its memory location and memory location cant be same for 2 arrays
const a = []
const b = []
console.log(a == b) // false
console.log(a === b) //false

// 2 : assign array c to variable d
// why so: because the same memory location of c is assign to d, if both has same memory location so it will return true

const c = []
const d = c
console.log(c === d) // true
console.log(c == d) // true

// 3 : if checks with elements index so it will check the array value

const e = [10]
const f = [10]
console.log(e[0] == f[0]) //true
console.log(e[0] === f[0]) //true

// 4:  this expands array into individual elements of an array

const arr = [1, 2, 3, 4]
console.log(...arr)


// if deletes the name property and console it returns true if property is deleted
let data = { name: "varun" }
console.log(delete data.name) // true
console.log(data) // empty object

// we can directly delete object, we can just delete property of it

let data1 = { name: "varun" }
// console.log(delete data1, "data1") // true
// console.log(data1) // return exact object cause its not deleted

// merge 2 objects
let obj1 = { name1: "varun", age1: 25 };
let obj2 = { name2: "vikram", age2: 25 };

obj1 = { ...obj1, ...obj2 }
console.log(obj1)

// checks values with || (or) operator
// or operator returns first  positive values and here positive value is {}
// if the all values are negative than it takes the last one
const cheksVal = false || {} || null //{}
const cheksVal1 = false || {} || null | 20 //{}, returns first positive value


// JS checks operator left to right

let nameExample = 'string is a name'
console.log(!typeof nameExample === 'object') // false, cause it executs ! first (left to right)
console.log(!typeof nameExample === 'object') // false

// swipe numbers

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1]
console.log(num1, num2, "swap")