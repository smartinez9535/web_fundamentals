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

//Week 2 Day 1
var floor = Math.floor(1.9)
var ceiling = Math.ceil(3.2)
var random = Math.random()

console.log(floor)
console.log(ceiling)
console.log(random)


function d6(){
    var max = 6
    var min = 1
    var roll = Math.floor(Math.random() * (max - min + 1) + min);
    return roll
}

var playerRoll = d6();
console.log(playerRoll)


//Magic Eight-Ball:
//Using the following array, write a function that will answer all of our questions by randomly choosing a response.
//Our terminal should print out one of these answers upon calling the function
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

//Could remove -1 and +1 as they cancel each other out
function magicEightBall(arr){
    var max = arr.length/*- 1*/
    var min = 0
    var index = Math.floor(Math.random() * (max - min/* + 1*/) + min);//In this case, since min = 0, both mins could be removed as they do add/subtract 0
    return arr[index]
}

var playerRoll = magicEightBall(lifesAnswers);
console.log(playerRoll);


var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}

console.log("\nID divisible by 3")
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id % 3 == 0) {
        console.log(pokémon[i]);
    }
}

console.log("\nMore than 1 type")
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i]);
    }
}

console.log("\nOnly poison")
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length == 1 && pokémon[i].types[0] == "poison") {
        console.log(pokémon[i].name);
    }
}

console.log("\nFirst type of second type flying")
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types.length > 1){
        if(pokémon[i].types[1] == "flying"){//needs to be nested to prevent out of bounds errors, second is reliant on first being true
        console.log(pokémon[i].types[0]);
        }
    }
}

console.log("\nReverse name of only poison")
var splitter;
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length == 1 && pokémon[i].types[0] == "poison") {
        splitter = pokémon[i].name.split("");//.split("") to convert characters in string to elements in array
        console.log(reverseArray(splitter).join(""))//.join("") to convert array to string without commas
    }
}


var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i < arr2d.length; i++)
    {
        for(var x = 0; x < arr2d[i].length; x++)
        {
            //var temp = arr2d[i][x]
            //flat.push(temp)
            
            flat.push(arr2d[i][x])
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]




