const array1 = ['iBlurBlur', 1, 2, 3, 4] //999
const array2 = array1 // ['iBlurBlur', 1, 2, 3, 4] 
array1.push(999) // push คือตัวเพิ่มในส่วนของนั้นๆ

console.log(array1);
console.log(array2);

const array3 = [444, 1234, ...array1 , '!!!!!']  //... คือการระเบิดค่าออกมา แต่สามารถแทรกข้อความเพิ่มได้
array1.push('*****')

console.log(array1);
console.log(array2);
console.log(array3);

//---------------

const obj1 = {name: 'iBlurBlur', age: 30}
const obj2 = obj1
obj1.id = 'p1241245563'

console.log(obj1);
console.log(obj2);

const obj3 = {...obj1, startDate: 1241242421, updateDate: 77777}
obj1.role = 'admin'

console.log(obj1);
console.log(obj2);
console.log(obj3);