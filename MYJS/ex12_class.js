class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    run() {
        console.log('Person run');
    }

    static walk() {
        console.log('Person walk');
    }

    get say(){
        return "omg"
    }
}

class Dev extends Person{
    constructor(id, name, job){
        super(id, name)
        this.job = job
    }

    run(){
        super.run()
        console.log("Dev: run");
    }
}
const obj1 = new Person(21421412, 'iBlurBlur')
const obj2 = new Person(12553, 'Cat')

obj1.name = "mr.iBlurBlur"

console.log(obj1);
console.log(obj2);

obj1.run()

Person.walk()

console.log(obj1.say);

const obj3 = new Dev(12451252, 'iBlurBlur', 'admin')

console.log(obj3);

obj3.run()