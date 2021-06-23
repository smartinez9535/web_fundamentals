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