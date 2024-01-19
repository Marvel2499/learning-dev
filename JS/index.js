/*
    JS Tutorial:
        - comment
        - Variables  ตัวแปร
        - Identifiers ตัวระบุ
        - Operators  ผู้ประกอบการ
        - Conditions เงื่อนไข
        - Iterations  วนซ้ำ
        - Funtions
        - Scope
        - Array
*/

// Variables

var a; //​​​​​ undefined​​​​​
var b = 10; // number
var c = 12.67; // number
var e = true; // boolean จะใช้จัดเก็บตัวแปรตรรกที่มีค่าเป็น จริงและเท็จ (true/false)
var f = 'codemobiles'; // string ทำหน้าที่ใน การเก็บข้อมูลที่เป็น “ชุดของตัวอักษร”

b = "javascript";
a = c;
a = 500;
a = true;

console.log(a);

f = 10; // Without var (not recommended)

var _a, $a, _A, $A, A_b, a_B; // Case-sensitive

// var !a, 01a, a!a, a&b;           // SyntaxError ข้อผิดพลาดที่เกิดจากการเขียนคำสั่งโปรแกรมผิดรูปแบบ ไวยากรณ์ของภาษา
// var if; var var, var return;     // Reserved words





/*
 *   Operators:
 *     - Arithmetic:  +, -, *, /, %, ++, --
 *     - Assignment:  =, +=, -=, *=, /=, %=
 *     - Comparison:  ==, ===, !=, !==, >, <, >=, <=
 */

var a = 1;

 a = a + 2;
 console.log(a);

a += 5;
console.log(a);

a++;
 console.log(a);



 //Conditions เครื่องหมายเทียบ

var money = 20;

// if-then เงื่อนไข

if(money > 50){   // true
    console.log("buy");
}



// if-then-else  เงื่อนไขสำรอง

if(money > 50){ // true
    console.log("buy");
}else{ // false
    console.log("T_T");
}


if(money > 50){ // true
    console.log("buy");
}else if(money > 20){
    console.log("buy water");
}else{
    console.log("T_T");
}


var level = "easy";

if(level == "easy"){
    console.log("result = easy");
}else if (level == "hard"){
    console.log("result = hard");
}


switch(level){
    case "easy":
            console.log("result = easy");
            break;
    case "hard":
            console.log("result = hard");
            break;
    default:
            console.log("default case");
}





// Iterations (Loop)

var money = 100;

var count = 1;


// while loop
while(count <= 5){
    money += 100;
    console.log(money);
    count++;
}

var keyboard = 'n';
while(true){
    console.log("test");
    if(keyboard == 'n'){
        break;
    }
}

var money = 100;

// For loop
for(var i = 0; i < 10; i++){
    money += 100;
    console.log(money)
}




// Funtions

// without return
function print_text(){
    console.log("codemobiles");
}

print_text();

// return
function cal(x1, x2, x3){   // x1 = 10, x2 = 10;
    return x1 + x2 + x3 - 10;
}

var a = cal(10, 10, 10);
var b = cal(10, 10, 10);
var c = cal(10, 10, 10);


// Scope
var x = 10; // global

function mul(x1, x2){
    var text = "codemobiles";  //local
    return x1 * x2;
}

console.log(x);
//console.log(x2);



// Array


var money = [100, 200, 300, 500, 900];


console.log(money[0]);
console.log(money.length);

var sizeOfMoney = money.length;

for(var i = 0; i < sizeOfMoney; i++){
    console.log(money[i]);
}

money[5] = 1200;

console.log(money[5]);