//creation of Buttons
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

//Calculation functionality added.
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return (num1 - num2);
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


//Calculation Maker added.
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

//variables for storing calculations.
let firstNum = '';
let operation = '';
let secondNum = '';

//To check if the if it is '='
let prevClick = '';

//for writing into innertext of html element.
let writeEle = document.getElementById('sc2');
let writeEl1 = document.getElementById('sc1');

//Event Listener added for buttons 
let btn = Array.from(document.querySelectorAll('button'));
btn.map(bt => {
    bt.addEventListener('click', () => {

        // check if it is a number and add to first opparend.
        if (!isNaN(bt.innerText) && operation == '') {
            if (prevClick != '=') {
                firstNum += bt.innerText;
                writeEle.innerText += bt.innerText;
            } else if (prevClick == '=') {
                alert('Pick the correct operator');
            }
            // console.log("first" + " " + firstNum);
            //check if it is a number and add to second opparend.
        } else if (!isNaN(bt.innerText) && operation != '') {
            secondNum += bt.innerText;
            writeEle.innerText += bt.innerText;
            // console.log("second" + " " + secondNum);
            //check for . dot notation.
        } else if (bt.innerText == '.' && firstNum != '' && operation == '') {
            if (firstNum.includes('.')) {
                alert('can\'t use more than one \'.\'');
            } else {
                firstNum += bt.innerText;
                writeEle.innerText += bt.innerText;
                // console.log("dot1" + firstNum);
            }
            //check for .dot notation for second element.
        } else if (bt.innerText == '.' && secondNum != '' && operation != '') {
            if (secondNum.includes('.')) {
                alert('can\'t use more than one \'.\'');
            } else {
                secondNum += bt.innerText;
                writeEle.innerText += bt.innerText;
                // console.log("dot" + secondNum);
            }
            //checks for operation symbol
        } else if ((firstNum != '' || firstNum == 0) && secondNum == '' && (bt.innerText == '+' || bt.innerText == '-'
            || bt.innerText == 'x' || bt.innerText == '/' || bt.innerText == '%')) {
            if (bt.innerText == 'x') {
                operation = '*';
                writeEle.innerText += bt.innerText;
            } else {
                operation = bt.innerText;
                writeEle.innerText += bt.innerText;
            }
            prevClick = '';
            // console.log("operation" + " " + operation);
            // if the buttons is = then calls function for calculation.
        } else if ((firstNum != '' || firstNum == 0) && secondNum != '' && bt.innerText == '=') {
            
            let result = operator(parseFloat(firstNum), parseFloat(secondNum), operation);
            console.log(result);
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
            // console.log(firstNum);
            operation = '';
            secondNum = '';
            //if the buttons is any operation then calls function for calculation and adds to firstNum
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
                prevClick = '';
            }

            if (bt.innerText == 'x') {
                operation = '*';
                writeEle.innerText += bt.innerText;
            } else {
                operation = bt.innerText;
                writeEle.innerText += bt.innerText;
            }
            secondNum = '';
            // console.log(firstNum);
            // console.log(operation);
            // if AC is clicked it clears all the calculations.
        } else if (bt.innerText == 'AC') {
            firstNum = '';
            secondNum = '';
            operation = '';
            prevClick = '';
            writeEle.innerText = '';
            writeEl1.innerText = '';
            //if C is clicked removes last letter from calculation of firstNum.
        } else if (bt.innerText == 'C' && firstNum != '' && operation == '') {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            writeEle.innerText = firstNum;
            // console.log(firstNum);
            //if C is clicked removes last letter from calculation fo secondNum.
        } else if (bt.innerText == 'C' && secondNum != '') {
            secondNum = secondNum.substring(0, secondNum.length - 1);
            let ans = writeEle.innerText;
            writeEle.innerText = ans.substring(0, ans.length - 1);
            // console.log(secondNum);
            // if +/- is clicked then adds '-' to number.
        }else if(bt.innerText == 'C' && operation != '' && secondNum == ''){
            let op = writeEle.innerText;
            writeEle.innerText =  op.substring(0, op.length-1);
            operation = '';
        } else if (bt.innerText == '+/-' && firstNum != '' && operation == '') {
            if (firstNum.includes('-')) {
                firstNum = firstNum.substring(1);
                writeEle.innerText = writeEle.innerText.substring(1);
            } else {
                firstNum = '-' + writeEle.innerText
                writeEle.innerText = firstNum;
            }
            // if +/- clicked then adds '-' to second number.
        } else if (bt.innerText == '+/-' && secondNum != '' && operation != '') {
            if (secondNum.includes('-')) {
                secondNum = secondNum.substring(1);
                writeEle.innerText = writeEle.innerText.substring(1);
            } else {
                secondNum = '-' + secondNum;
                writeEle.innerText = firstNum + operation + secondNum;
                // console.log(secondNum);
            }
        }
    })
})

