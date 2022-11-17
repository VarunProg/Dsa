const data = {
    a: {
        a1: {
            a2: "1",
            a3: "2",
        },
        a6: {
            a7: "3"
        },
        a4: "4",
    },
    b: {
        b1: "5",
        b2: "6",
    },
    c: "7",
    d: {
        d1: "8",
        d2: "9",
    },
    e: { e1: "10", e2: {} },
};
// problem statement iterate the values of object if even its nested

//Object.keys converts object into an array
const iterate = (obj) => {

    Object.keys(obj).map((key) => {
        if (Object.keys(obj[key]).length === 0) return
        // console.log(key, "key") //got all properties joki array mai convert huui object.keys se
        //console.log(obj[key], "value") // to access all the key:values

        // check condition now

        if (typeof obj[key] === "object") {
            // if (Object.keys(obj[key]).length === 0)
            console.log(obj[key], "if statement")
            return iterate(obj[key])
        }
        else {
            //if (Object.keys(obj[key]).length === 0) return
            console.log(obj[key], " ----> values else statement")
        }
    })
}

iterate(data)


//second way --> object can be directly manipulated by using for in loop



// how to access values of object

const sampleObj = {
    a: 10
}
// console.log(sampleObj.a)
// console.log(sampleObj['a'])