
const empID = '12345' // 0000012345
console.log(empID.padStart(10, '0'));
console.log(empID.padEnd(10, '0'));
console.log(empID.padEnd(empID.length + 5, '0'));

const name = 'iBlurBlur'
console.log(name.padStart(20));
console.log(JSON.stringify(name.padStart(20)));

