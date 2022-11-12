// destructuring is used to unpack the elements of an array.

const destructuring = (obj) => {

    const a1 = obj.a
    const b1 = obj.b
    const c1 = obj.c
    // console.log(a1, b1, c1)
}

destructuring({ a: 10, b: 20, c: 30 })

//this is same as below
const destructuring1 = (obj) => {

    const { a2, b2, c2 } = obj
    console.log(a2, b2, c2)
}

destructuring1({ a2: 10, b2: 20, c2: 30 })