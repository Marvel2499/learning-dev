// const demo = function insertProduct(name, callback1, callback2){
//     console.log('job1');
//     console.log('job2');
//     console.log('job3');
//     callback1(callback2)

// }

// function callback1(callback){
//     console.log('callback1');
//     callback()
// }

// function callback2(){
//     console.log('callback2');
// }

// demo('iBlurBlur', callback1, callback2)


//----------------------


function promiseDemo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('iBlurBlur')
            //reject(new Error('iBlurBlur'))
        }, 2000)
    })
}

function callPromise1() {
    promiseDemo().then(res => {
        console.log(res);
        return "done"
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}

async function callPromise2() {
    const res = await promiseDemo()
    console.log(res);
    console.log("done");
}

callPromise1()
callPromise2()

const api = 'https://jsonplaceholder.typicode.com/posts'

function fetch1() {
    fetch(api)
        .then(res => res.json)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
}

async function fetch2() {
    try {
        const res1 = await fetch(api)
        const res2 = await res1.json
        console.log(res2);
    } catch (error) {
        console.log(error);
    }
}

//fetch1()
//fetch2()

//------------------------------


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('iBlurBlur1')
        //reject(new Error('iBlurBlur'))
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('iBlurBlur2')
        //reject(new Error('iBlurBlur'))
    }, 2000)
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('iBlurBlur3')
        //reject(new Error('iBlurBlur'))
    }, 2000)
})



async function runFoo(){
    const res = await Promise.allSettled([p3, p1, p2])
    for(const item of res){
        console.log(item);
    }
}

runFoo()