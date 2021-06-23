var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// Iterate through the array (for loop)
// Check to see if the numbers in array are greater or equal to 0 (Conditionals)
for (var i = 0; i < numbers.length; i++)
{
    if (numbers[i] >= 0)
    {
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");
