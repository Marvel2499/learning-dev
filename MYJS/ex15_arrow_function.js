const array1 = ['iBlurBlur', 'Cat']

const normalFunc1 = array1.filter(function (item) {
    return item === 'iBlurBlur'
})

const arrowFunc1 = array1.filter((item) => item === 'iBlurBlur')

console.log(normalFunc1);
console.log(arrowFunc1);

const normalFunc2 = function abc() {
    console.log('iBlurBlur');
}

const arrowFunc2 = () => {
    console.log('iBlurBlur');
}

normalFunc2()
arrowFunc2()


const normalFunc3 = function sum(x1, x2) {
    if (x1 > 5) {
        x1 - 5
    }
    return x1 + x2
}

const arrowFunc3 = (x1, x2) => {
    if (x1 > 5) {
        x1 - 5
    }
   return x1 + x2
}

console.log(normalFunc3(5, 3));
console.log(arrowFunc3(5, 3));
