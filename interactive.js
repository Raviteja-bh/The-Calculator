let buttons = document.getElementById('buttons');
let columns = 5;
let rows = 4;
let count = 1;
let arr = ['null', 'AC', 'C', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
for (let i = 0; i < columns; i++) {
    let col = document.createElement('div');
    col.className = 'l1';
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('button');
        row.className = 'row' + count;
        row.id = 'row' + count;
        row.innerText = arr[count];
        col.appendChild(row);
        count++;
    }
    buttons.appendChild(col);
}


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return Math.abs(num1 - num2);
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}



function operator(firstNum, secondNum, operator) {
    if (operator == '+') {
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return sub(firstNum, secondNum);
    } else if (operator == '*') {
        return mul(firstNum, secondNum);
    } else if (operator == '/') {
        return div(firstNum, secondNum);
    } else if (operator == '%') {
        return mod(firstNum, secondNum);
    } else {
        console.log("Pick the Correct operator!");
    }
}
let firstNum = '';
let operation = '';
let secondNum = '';

// let one = 0; 
// let two = 0;
let prevClick = '';
let writeEle = document.getElementById('sc2');
let writeEl1 = document.getElementById('sc1');
let btn = Array.from(document.querySelectorAll('button'));
btn.map(bt => {
    bt.addEventListener('click', () => {


        if (!isNaN(bt.innerText) && operation == '') {
            if (prevClick != '=') {
                firstNum += bt.innerText;
                writeEle.innerText += bt.innerText;
            } else if (prevClick == '=') {
                alert('Pick the correct operator');
            }
            console.log("first" + " " + firstNum);
        } else if (!isNaN(bt.innerText) && operation != '') {
            secondNum += bt.innerText;
            writeEle.innerText += bt.innerText;
            console.log("second" + " " + secondNum);
        } else if (bt.innerText == '.' && firstNum != '' && operation == '') {
            if (firstNum.includes('.')) {
                alert('can\'t use more than one \'.\'');
            } else {
                firstNum += bt.innerText;
                writeEle.innerText += bt.innerText;
                console.log("dot1" + firstNum);
            }
        } else if (bt.innerText == '.' && secondNum != '' && operation != '') {
            if (secondNum.includes('.')) {
                alert('can\'t use more than one \'.\'');
            } else {
                secondNum += bt.innerText;
                writeEle.innerText += bt.innerText;
                console.log("dot" + secondNum);
            }
        } else if (firstNum != '' && secondNum == '' && (bt.innerText == '+' || bt.innerText == '-'
            || bt.innerText == 'x' || bt.innerText == '/' || bt.innerText == '%')) {
            if (bt.innerText == 'x') {
                operation = '*';
                writeEle.innerText += bt.innerText;
            } else {
                operation = bt.innerText;
                writeEle.innerText += bt.innerText;
            }
            prevClick = '';
            console.log("operation" + " " + operation);
        } else if (firstNum != '' && secondNum != '' && bt.innerText == '=') {
            let result = operator(parseFloat(firstNum), parseFloat(secondNum), operation);
            prevClick = bt.innerText;
            firstNum = result;
            // writeEle.innerText = result;
            if (writeEl1.innerText != '') {
                writeEl1.innerText = '';
                if (result % 1 === 0) {
                    writeEl1.innerText = result;
                } else {
                    writeEl1.innerText = result.toFixed(5);
                }
            } else {
                if (result % 1 === 0) {
                    writeEl1.innerText = result;
                } else {
                    writeEl1.innerText = result.toFixed(5);
                };
            }
            console.log(firstNum);
            operation = '';
            secondNum = '';
        } else if (firstNum != '' && secondNum != '' && (bt.innerText == '+' || bt.innerText == '-'
            || bt.innerText == 'x' || bt.innerText == '/' || bt.innerText == '%')) {
            let result = operator(parseInt(firstNum), parseInt(secondNum), operation);
            firstNum = result;
            // writeEle.innerText = result;
            if (writeEl1.innerText != '') {
                writeEl1.innerText = ''
                if (result % 1 === 0) {
                    writeEl1.innerText = result;
                } else {
                    writeEl1.innerText = result.toFixed(5);
                };
            } else {
                if (result % 1 === 0) {
                    writeEl1.innerText = result;
                } else {
                    writeEl1.innerText = result.toFixed(5);
                };
            }

            if (bt.innerText == 'x') {
                operation = '*';
                writeEle.innerText += bt.innerText;
            } else {
                operation = bt.innerText;
                writeEle.innerText += bt.innerText;
            }
            secondNum = '';
            console.log(firstNum);
            console.log(operation);
        } else if (bt.innerText == 'AC') {
            firstNum = '';
            secondNum = '';
            operation = '';
            prevClick = '';
            writeEle.innerText = '';
            writeEl1.innerText = '';
        } else if (bt.innerText == 'C' && firstNum != '' && operation == '') {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            writeEle.innerText = firstNum;
            console.log(firstNum);
        } else if (bt.innerText == 'C' && secondNum != '') {
            secondNum = secondNum.substring(0, secondNum.length - 1);
            let ans = writeEle.innerText;
            writeEle.innerText = ans.substring(0, ans.length - 1);
            console.log(secondNum);
        } else if (bt.innerText == '+/-' && firstNum != '' && operation == '') {
            if (firstNum.includes('-')) {
                firstNum = firstNum.substring(1);
                writeEle.innerText = writeEle.innerText.substring(1);
            } else {
                firstNum = '-' + writeEle.innerText
                writeEle.innerText = firstNum;
            }
        } else if (bt.innerText == '+/-' && secondNum != '' && operation != '') {
            if (secondNum.includes('-')) {
                secondNum = secondNum.substring(1);
                writeEle.innerText = writeEle.innerText.substring(1);
            } else {
                secondNum = '-' + secondNum;
                writeEle.innerText = firstNum + operation + secondNum;
                console.log(secondNum);
            }
        }
    })
})

