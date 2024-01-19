if (true) {
    var var1 = 'iBlurBlur'
}
console.log("var1: " + var1);


if (false) {
    var var2 = 'iBlurBlur'
}
console.log("var2: " + var2);


var var3 = 'iBlurBlur'

if (true) {
    var var3 = 'cat'
    //....
}
console.log("var3: " + var3);

//----------------------------

if (true) {
    let let1 = 'iBlurBlur'
}

// console.log("let1: " + let1);


let let2 = 'iBlurBlur'

if (true) {
    let let2 = 'cat'
    //....
}

let2 = "dog"

console.log("let2: " + let2);

// -------------------------------------

const const1 = 'iBlurBlur'
// const1 = 'Cat'

if (true) {
    const const1 = 'cat'
    //....
}

console.log("const1: " + const1);

const const2 = []
// const2 = 'iBlurBlur'
const2.push('iBlurBlur')
const2.push('cat')
console.log("const2: " + const2);

const const3 = {}
const3.name = 'iBlurBlur'
const3.age = 30

// const3 = 'iBlurBlur'
const3.name = 'Cat'

console.log("const3: " + JSON.stringify(const3));
