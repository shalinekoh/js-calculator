let value1 = 0;
let total = 0;
let operator = '';

function add(a, b){
    num = a + b;
    return Math.round(num*10)/10;
}

function subtract(a, b){
    num = a - b;
    return Math.round(num*10)/10;
}

function multiply (a, b){
    num = a * b;
    return Math.round(num*10)/10;
}

function divide (a ,b){
    num = a / b;
    if (b==0){return "LMAO"}
    return Math.round(num*10)/10;
}

function operate(num1, num2, operator){
    if (operator == '+') {
        res = add(num1, num2)
    }
    else if (operator == '-') {
        res = subtract(num1, num2)
    }
    else if (operator == '*') {
        res = multiply(num1, num2)
    }
    else if (operator == '/') {
        res = divide(num1, num2)
    }
    return res;
}

display = document.querySelector(".display")
numButtons = document.querySelectorAll(".numbers #number")

numButtons.forEach(button => {
    button.addEventListener("click", function(){
        console.log(button.innerHTML);
        if (total == 0){
            total = button.innerHTML;
        }
        else {
            total += button.innerHTML;
        }
        display.innerHTML = total;
        })
});
arr = [];
operatorButtons = document.querySelectorAll(".operators #operator")
operatorButtons.forEach(button => {
    button.addEventListener("click", function(){
        if (total != 0){

            arr.push(Number(total))
        }
        total = 0;
        console.log("length: ", arr.length)
        if (arr.length == 2){
            res = operate(arr[0], arr[1], operator);
            arr = [res];
            display.innerHTML = res;
        }
        operator = button.innerHTML;
    })
})

equalButton = document.querySelector(".numbers #equal")
equalButton.addEventListener("click", function(){
    arr.push(Number(total))
    if (arr.length == 1){
        total2 = arr[0];
    }
    else if (arr.length == 2){
        total2 = operate(arr[0], arr[1], operator);
        arr = [total2];
    }
    display.innerHTML = total2;
    total = 0;
})

clearButton = document.querySelector(".left #AC")
clearButton.addEventListener("click", function(){
    total = 0;
    arr = [];
    display.innerHTML = total;
})
