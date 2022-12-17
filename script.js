function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return +(a/b).toFixed(10);
}

function operate(a,b,operator)
{
    switch(operator)
    {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}

let firstNum = 0,secondNum,symbol;
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

bottomText.textContent = 0;

function display(event)
{
    if(bottomText.textContent.length < 13 && (secondNum === undefined || secondNum === undefined))
    {
        if(symbol === undefined)
        {
            if(bottomText.textContent === '0')
            {
                bottomText.textContent = '';
            }
            bottomText.textContent += event.target.textContent;
            firstNum = bottomText.textContent;
        }
        else
        {
            if(secondNum === undefined || bottomText.textContent === '0')
            {
                bottomText.textContent = '';
            }
            bottomText.textContent += event.target.textContent;
            secondNum = bottomText.textContent;
        }
    }
    else
    {
        alert("Can't enter more digits. Please delete some digits to continue the calculation.");
    }
}

function operateFunction(event)
{
    if(secondNum !== undefined)
    {
        firstNum = operate(+firstNum,+secondNum,symbol);
        bottomText.textContent = firstNum;
    }
    secondNum = undefined;
    topText.textContent = '';
    topText.textContent += firstNum + ' ' + event.target.textContent;
    symbol = event.target.textContent;
}

function equalFunction(event)
{
    if(firstNum !== undefined && secondNum !== undefined)
    {
        topText.textContent = '';
        topText.textContent += firstNum + ' ' + symbol + ' ' + secondNum + ' '  + event.target.textContent;
        firstNum = operate(+firstNum,+secondNum,symbol);
        bottomText.textContent = firstNum;
        secondNum = undefined;
        symbol = undefined;
    }
}

function clearFunction(event)
{
    bottomText.textContent = 0;
    topText.textContent = '';
    firstNum = 0;
    secondNum = undefined;
    symbol = undefined;
}

numbers.forEach(number => number.addEventListener('click', display));
operators.forEach(operator => operator.addEventListener('click',operateFunction));
equals.addEventListener('click',equalFunction);
clear.addEventListener('click',clearFunction);