// Variables
var myName = "Samuel Martinez" //String
var age = '30' //String

var myAge = 30 // Numbers or Integers
var weight = 190.5  // FLoats or Double
var sleepy = true // Boolean

// Arrays - Ordered Data Structures
var names = ["Edwards", "John", "Jane"]

// For Loops and While Loops

for(var vum = 1; num < 7; num+=2)
{
    console.log(num)
}

//ex. 1
var a = 25;//25
a = a - 13;//12
console.log(a/2);//6
    
a = "hello";
console.log(a + " hello");


//ex. 2
for(var i=0; i<10; i++) {
    console.log(i); //0, 4, 8
    i = i + 3; //3, 7, 11
}
    
console.log("outside of the loop " + i);

//ex. 3
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];//1
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); //2, 5, 10
    }
    
    console.log("the total is: " + sum); //10
    
}

getTotal([1, 3, 5]);
