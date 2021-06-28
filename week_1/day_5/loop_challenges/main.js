function oddsto20()
{
    for (i = 1; i <= 20; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
oddsto20();

function divisibleBy3()
{
    for (i = 100; i >= 0; i--)
    {
        if (i % 3 == 0)
        {
            console.log(i);
        }
    }
}
divisibleBy3();

function printSequence()
{
    var num = 4;
    while(num > -4)
    {
        console.log(num);
        num -= 1.5;
    }
}
printSequence();

function sumTo100()
{
    var sum = 0;
    for(i = 1; i <= 100; i++)
    {
        sum += i;
    }
    return sum;
}
console.log(sumTo100())

function multiplyTo12()
{
    var product = 1;
    for(i = 1; i <= 12; i++)
    {
        product = product * i;
    }
    return product;
}

console.log(multiplyTo12())