//we want only lenght till 4
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.length = 3;
console.log(arr); //[ 1, 2, 3 ]

//second way  --> 0 se start kiya index number 4 pe gaya uske baad baaki sb print kardiya
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(0, 4);
console.log(arr2); //[ 5, 6, 7, 8, 9 ]

// 3 ques -->
// to sum of an array

const data = [1, 2, 3];
const intialValue = 5;
const res = data.reduce((acc, curr) => {
    //console.log(acc, "acc") // holds previous values and start from initial value
    //console.log(curr, "crr") // this current holds the array values
    return acc + curr; // current is use for the actions
}, intialValue);
console.log(res);


// remove duplicate values
//set returns object to return array from array we need destructuring [...arrName]
const removeArrayDuplicateValues = [1, 2, 22, 2, 3, 3, 4, 5]
const uniqueData = new Set(removeArrayDuplicateValues)
console.log(uniqueData, "uniqueData") // but here data we get in object
//output of above => Set(6) { 1, 2, 22, 3, 4, 5 } uniqueData
//to get data in array destructure this
console.log([...uniqueData], "uniqueData")//[1, 2, 22, 3, 4, 5] uniqueData


//comma operator
// pehle variable mai calculation karta hai, second ko print

// increase no by 1
let x = 10
x = (x++, x) // here x is 10 and x++ increments value
console.log(x)//11

//agar x 5 pass kiya to res hoga 5
let x1 = 5
x1 = (x1++, 5)// because here we passed the values 5
console.log(x1) // prints 5


// value swap through destructuring
let a = 20;
let b = 10;
[a, b] = [b, a];
console.log(a, b);