const obj1 = {
    id: 'p12453253',
    name: 'iBlurBlur',
    price: 10_000
}

// const productID = obj1.id
// const name = obj1.name
// const price = obj1.price

// console.log(`${productID}, ${name}, ${price}`)

const {id : productID, name, price} = obj1

console.log(`${productID}, ${name}, ${price}`)