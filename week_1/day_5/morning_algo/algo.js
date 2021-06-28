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

var num = 1
console.log(num)
num++ // num = num + 1 OR num += 1
console.log(num) // 2
num++
console.log(num) // 3

//Conditionals

var username = "eddieim"
var password = "qwerty12345"

// <, >, <=, >=, ==, !=
if(username == "eddieim" && password == "qwerty12345"){
    console.log("Welcome Edward Im")
}

var age = 30

if(age >= 25){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine, alcohol, and mj")
    console.log("Rent a car")
}

else if (age >= 21){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine, alcohol, and mj")
}

else if(age >= 18){
    console.log("You can vote and you can buy lottery tickets")
}

else{
    console.log("You are a little young come back later")
}

var isSunny = true;
var temperature = 45; // let's assume degrees fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if(isSunny){
    whatToBring += "sunglasses, ";//true
}
if(temperature < 50){
    whatToBring += "a coat, ";//true
}
if(isRaining){
    whatToBring += "an umbrella, ";//false
}
whatToBring += "and a smile!";

console.log(whatToBring);// I should bring sunglasses, a coat, and a smile!

for(var i = 10; i>0; i--){
    if(i != 2){
        console.log(i); //10, 9, 8, 7, 6, 5, 4, 3, 1
    } else{
        console.log("ignition!"); //i = 2 --> ignition!
    }
}

console.log("liftoff!"); //liftoff!

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

//Function
//Defining Function Vs Calling Function
//Parameters vs Arguments

//Define the Function
function double(someNumber){
    var result = someNumber * 2
    return result
}

//Call the Function
console.log(double(4))
console.log(double(-4))
console.log(double(0))
console.log(double("edward")) //return Nan -> Not a Number


function print1to255(){
    for(var i = 1; i < 256; i++){
        console.log(i)
    }
}

console.log(print1to255())


function add(x,y){
    var result = x + y
    //console.log(result)
    return result
}

var answer = add(4,5)
var answer2 = add(100,100)
console.log(answer)
console.log(answer2)

var x = 5;

function setX(newValue){
    //x = newValue;//Reaching out of function to change an existing value is bad practice, function should be self-contained
    var x = newValue; //always declare variable within a function to keep it contained
}

console.log(x);//5
setX(15);//x = 15
console.log(x);//15


var x = 5;

function addToX(amount){
    return x + amount;
    console.log("hello there");//unreachable
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


//-------------------
function isPal(arr){
    for(var left=0; left<arr.length/2; left++){//start at left side
        var right = arr.length-1-left;//start at right side
        if(arr[left] != arr[right]){//compare both sides, if !=, not palindrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";//iterated to center of array, is a palindrome
}

var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);//Not a pal-indrome!

var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);//Palindrome


// How to swap variables
var fruit1 = "apples"
var fruit2 = "oranges"

var temp = fruit1
fruit1 = fruit2
fruit2 = temp


var start = 0;
var end = 12;

while(start < end){
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


function getRandomInt(max){//returns random number from 0 to max - 1
    return Math.floor(Math.random() * max) + 1;
}

var randomInt = getRandomInt(20)
while(randomInt != 20){
    /* console.log("You rolled a " + randomInt + " try again") alt way of doing it*/
    console.log(`You rolled a ${randomInt} try again`) //not quotes, backticks, top left of keyboard, tilde key
    randomInt = getRandomInt(20)
}
console.log("Congrats you rolled a 20")

//Reverse an array
//Create a function where given an array you reverse the array and return the array
// [a,b,c,d,e] => [e,d,c,b,a] 

//Create a function wrapper (1 param / array type)
//Iterate through the array (for loop)
//Need a temp variable to store a value
//Swap the values within the array
//Return the array
function reverseArray(array){
    var temp = []
    for(var x = array.length - 1; x >= 0; x--){
        temp.push(array[x])
    }
    return temp;
}
console.log(reverseArray(["a", "b", "c", "d"]))
console.log(reverseArray([1,2,3,4,5,6,7]))
