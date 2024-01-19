function addVIP (name) {
    return name.replace('@' ,'VIP.')
}
console.log(addVIP ('iBlurBlur'));

function sum1(price) {
    let total = 0
    for (const index in price) {
        total += price[index]
    }
    console.log(total);
}

sum1([1, 2, 3])

function sum2(price) {
    let total = 0
    price.forEach(item =>
        total += item
    )
    console.log(total);
}

sum2([1, 2, 3])


function sum3(price = []) {
    let total = 0
    price.forEach(item =>
        total += item
    )
    console.log(total);
}

sum3()
