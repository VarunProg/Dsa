// destructuring is used to unpack the elements of an array.

const destructuring = (obj) => {
    const a1 = obj.a;
    const b1 = obj.b;
    const c1 = obj.c;
    // console.log(a1, b1, c1)
};

destructuring({ a: 10, b: 20, c: 30 });

//this is same as below
const destructuring1 = (obj) => {
    const { a2, b2, c2 } = obj;
    // console.log(a2, b2, c2)
};

destructuring1({ a2: 10, b2: 20, c2: 30 });

//
const info = {
    title: "Once Upon a Time",
    protagonist: {
        name: "Emma Swan",
        enemies: [
            { name: "Regina Mills", title: "Evil Queen" },
            { name: "Cora Mills", title: "Queen of Hearts" },
            { name: "Peter Pan", title: `The boy who wouldn't grow up` },
            { name: "Zelena", title: "The Wicked Witch" },
        ],
    },
};

function nestedArrayAndObject(obj) {
    // refactor this to a single line of destructuring...
    const {
        title,
        protagonist: {
            name,
            enemies: [{ name: name0, title: title0 }, { name: name1, title: title1 }],
        },
    } = obj;
    // console.log(title, name, name0, title0, name1, title1, "title");
}
nestedArrayAndObject(info);

//input
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

//breakPoints
//values, empty object
// first value checks, if empty return 

const iterate = (obj, prefixVal = "") => {
    Object.keys(obj).forEach(key => {
        //console.log(key) //key
        // console.log(typeof obj[key], "111")
        if (typeof obj[key] === 'object') {

            //console.log(key, "key")
            //console.log(obj[key])

            return iterate(obj[key])  // first checks all nested

        } else {
            // console.log(key, "key1")
            console.log(obj[key])
        }
    });


}
iterate(data)

//output
// {
// a_a1_a2: "1",
// a_a1_a3: "2",
// a_a4: "3",
// c: "5",
// d_d1: "1",
// d_d2: "4",
// e_e1: "1",
// e_e2: {}
// }
