// reverse string

// split() method splits a String object into an array of string by separating the string into sub strings.

//reverse() method reverses an array in place.The first array element becomes the last and the last becomes the first.

//join() method joins all elements of an array into a string.


// with chaining method
let myName = "Varun"
console.log(myName.split("").reverse().join(""))

// with for loop 
function reverseString(str) {
    let newString = "" // to hold the string values
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];

    }
    console.log(newString)

}
reverseString(myName)
