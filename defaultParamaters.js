
// b is default params, same we use in react
const defaultParamaters = (a, b = 5) => {
    return a + b;
}

const sum = defaultParamaters(10)
console.log(sum)



// checking default values with some conditions
// same we can check in react
const add = (a, b) => {
    b = b === undefined ? 7 : b; // if b undefined set as 7 else it should be b
    return a + b
}
const res = add(10)
console.log(res)
