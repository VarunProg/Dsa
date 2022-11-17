// why it prints first hello world than the value of i
// this settimeOut function forms a closure, this function remembers reference to i so wherever this function goes it takes reference of i along with it. what this settimeout does it take this function and stores it into some place and attaches the timer to it.

function x() {
    var i = 1;
    setTimeout(() => {
        // console.log(i)
    }, 1000);
    // console.log("hello world")
}

x()

// ques: print vlaues like 1,2,3,4,5
// why it behaves like this it prints ,6,6,6,6,6,6

// reason:
// 1 - setTimeOut creates a closure and inside this i takes a refernce to this i
// 2 - setTimeOut is attached some other place till the is over i value in loop becomes 6
// 3 - first in loop i value becomes 6 and then Js engine moves to the next line
// 4 - when setTimeOut is over at that time i value 6 so thats the reason i value is 6
// when timer expires it is too late and the loop was keep runnig till that time the value or i become 6
function y() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            // console.log(i)
        }, i * 1000);

    }
}
y()

// fix the problem
// let has a block scope 
// whenever the loop runs this i is a new variable all together, it is a new copy of i everytime
// each time this setTimeOut is run this callback has a new copy of it.

function y1() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            // console.log(i)
        }, i * 1000);

    }
}
y1()


// why it works with let -- because let is blocked scope everytime it creates a new copy of i, evertime this let variable is a new variable, in the case of var it is not 


// if you want to get the same output with var
// wrap a setTimeOut to a new function so that it get everytime a new copy of i

function y2() {
    for (let i = 0; i <= 5; i++) {
        function res(i) {
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        res(i)
    }
}
y2()