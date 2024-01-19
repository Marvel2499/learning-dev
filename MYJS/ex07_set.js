const set1 = new Set(['iBlurBlur', 9, 9, 5, 5, 5, 1, 1])
console.log(set1);
console.log(set1.size);

set1.add(1234)
set1.add(1234).add(999)
console.log(set1);
console.log(set1.size);

set1.delete(1234)
console.log(set1);
console.log(set1.size);

console.log(set1.has(1234));
console.log(set1.has('iBlurBlur'));

set1.clear()
console.log(set1);
console.log(set1.size);