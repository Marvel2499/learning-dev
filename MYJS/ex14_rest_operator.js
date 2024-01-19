function rest1(name,params){
    console.log(params);
    console.log(arguments);
    console.log(arguments[3]);
    const items = [...arguments]
    console.log(items);
    console.log(items[0]);
}

function rest2(name, ...rest){
    console.log(rest);
    console.log(rest[0]);

}
rest2 ('iBlurBlur', 1000 , 10_000, 100_000)