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
    return a/b;
}

function operate(a,b,operater)
{
    switch(operater)
    {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

console.log(operate(23,34,'/'))


const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

