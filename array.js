// to check if an object is an array or not

// Array.isArray() method is used to check whether an object (or a variable) is an array or not. This method returns true if the value is an array

var arrayList = [1, 2, 3]
console.log(Array.isArray(arrayList)) //true

var objList = {
    name: "varun",
    age: 25
}
console.log(Array.isArray(objList)) //false


// how to empty array
let arr = [1, 2, 3, 4, 5]
arr.length = 0;
console.log(arr, "checks array")

// second way
arr = []
console.log(arr, "chcks array")

// third way
let emptyArr = arr.splice(0, 0)
console.log(emptyArr, "empty array")

// fourth way
while (arr.length > 0) {
    arr.pop()
}
console.log(arr, "remove items with pop")

//ques: duplicate([1, 2, 3, 4, 5]);  output = // [1,2,3,4,5,1,2,3,4,5]
// concat is used to merge 2 arrays
function duplicate(arr) {
    console.log(arr.concat(arr))
}
duplicate([1, 2, 3, 4, 5])


// multiply a number b times , 2*3 = 6, 2+2+2
// a -- add
// what  will be added -  b times a

function multiplyTimes(a, b) {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum = sum + a
    }
    console.log(sum, "sum")
}
multiplyTimes(2, 3)
multiplyTimes(2, 10)

