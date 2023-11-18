/*
DIFFICULTY LEVELS:

1 = +
2 = -
3 = *
4 = /
5 = ^
6 = SQUARE ROOT
7 = log() in base a (a is chosen by the user)

DIGITS NUMBER:

A = 1
B = 10
C = 100
D = 1000

*/

let cifreMax = 2; //Must be decided by the user in the future
let firstNumber = 0;
let secondNumber = 0;

let scrNumber = 0;
let strNumber = 0;
let ctrNumber = 0;


//CREATE THE NUMBER BY PUSHING THE DIGITS IN IT
let userResult = [];

//KEYBOARD KEYS
document.getElementById("one").onclick = function add1() {
    userResult.push(1);
}
document.getElementById("two").onclick = function add2() {
    userResult.push(2);
}
document.getElementById("three").onclick = function add3() {
    userResult.push(3);
}
document.getElementById("four").onclick = function add4() {
    userResult.push(4);
}
document.getElementById("five").onclick = function add5() {
    userResult.push(5);
}
document.getElementById("six").onclick = function add6() {
    userResult.push(6);
}
document.getElementById("seven").onclick = function add7() {
    userResult.push(7);
}
document.getElementById("eight").onclick = function add8() {
    userResult.push(8);
}
document.getElementById("nine").onclick = function add9() {
    userResult.push(9);
}
document.getElementById("zero").onclick = function add0() {
    userResult.push(0);
}

//SEND FINAL RESULT
document.getElementById("submit").onclick = function submit() {
    let res = userResult.reduce((a, b) => a + b, 0)

    //DEBUG
    console.log(res);
}

//DIFFICULTIES
document.getElementById("gen").onclick = function difficulty1() {
    firstNumber = Math.floor(Math.random() * 9);
    secondNumber = Math.floor(Math.random() * 9);
    let equation = `${firstNumber} + ${secondNumber}`
    
    //DISPLAY ON -SCREEN-
    document.getElementById("display").innerHTML = equation;
    
    //DEBUG
    console.log(`${firstNumber} + ${secondNumber}`);
}
