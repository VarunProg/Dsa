//Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation 
const a = "hello";
const b = " world";
console.log(`${a}${b}`)

// best expample would be to get url

const url = "https://developer.mozilla.org/en-US/"
//now only want to get temelate litreals from this utl

const temelateLiteralUrl = `${url}/docs/Web/JavaScript/Reference/Template_literals`
// now we can use this url anywhere in the programs
console.log(temelateLiteralUrl)
