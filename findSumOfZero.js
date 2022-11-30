// find the sum of zero
const arr1 = [4, 5, 1, 2, 3, 6, -3, -6, -5, -8]

const findSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(arr[i], arr[j], "arr[i],arr[j]")
            }
        }
    }
}
findSumZero(arr1)

// with for of loop
const findSumZero1 = (arr) => {
    for (const elem of arr) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[elem] + arr[j] === 0) {
                console.log(arr[elem], arr[j], "arr[elem] === arr[j]")
            }

        }
    }
}
findSumZero1(arr1)
