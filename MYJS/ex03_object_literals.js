function addProduct(name, price, stock) {
    const obj1 = {
        name,
        price,
        count: stock
    }

    console.log(obj1)
}


addProduct('iBlurBlur', 1_000_000, 30)


function addOutOfStock(product) {
    // const obj1 = {
    //     name: product.name,
    //     price: product.price,
    //     count: 0
    // }

    const {name, price} = product
     const obj1 = {
        name,
        price,
        count: 0
    }

    console.log(obj1)
}

addOutOfStock({name: 'iBlurBlur', price: 1_000_000})