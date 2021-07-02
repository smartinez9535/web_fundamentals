var num1
var num2
var symbol
var displayDiv = document.querySelector("#display");

function setOP(operator)
{
    //console.log(operator)
    symbol = operator
}

function press(number)
{
    if(symbol == undefined)
    {
        if(displayDiv.innerText == 0)
        {
            num1 = number
            displayDiv.innerText = number
        }
        else
        {
            num1 = num1 + "" + number
            displayDiv.innerText = num1
            //console.log(num1)
        }
    }
    else if(symbol != undefined)
    {
        if(num2 == undefined)
        {
            num2 = number
            displayDiv.innerText = num2
        }
        else
        {
            num2 = num2 + "" + number
            displayDiv.innerText = num2
            //console.log(num2)
        }
    }
}

function clr()
{
    num1 = undefined
    //console.log(num1)
    num2 = undefined
    //console.log(num2)
    symbol = undefined
    //console.log(symbol)
    displayDiv.innerText = 0

}

function calculate()
{
    var result = num1 + symbol + num2
    displayDiv.innerText = eval(result)
}