// normanl Arrow function

// no need to write return
const total = () => 5

// if only one value in parameters no need of ()
const add = a => a + 7

// with more than one parameters need ()
const divide = (a, b) => a / b;


//ARROW FUNCTION WITH THIS KEYWORD
const demo = (val) => {
    return this
}
let res = demo(1, 2, 3)
// console.log(res)

//Arrow functions cannot be used as constructors

const Order = (main, side, dessert) => {
    this.main = main,
        this.side = side,
        this.dessert = dessert
    this.order = function () {
        return `i want one ${this.main} with ${this.side} and ${this.dessert}`
    }
}
const newOrder = new Order("protien", "juice", "nuts") //TypeError: Order is not a constructor
console.log(newOrder.order())