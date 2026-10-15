let firstNumber = 12;
let operator ="+";

function clearAll() {
    display.value = "";
}

let display = document.getElementById("display");

function pressDigit(digit) {
    display.value = display.value + digit;
}