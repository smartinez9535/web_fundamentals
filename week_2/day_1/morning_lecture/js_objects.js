var crust = "chicago-style"
var sauce = "marinara"
var topping1 = "pepperoni"
var topping2 = "sausage"
var cheese = "three cheese blend"

console.log("Crust: " + crust)

var chrisPizza = {
    "crust" : "thin crust",
    "sauce" : "arrabiatia",
    "cheese" : "three cheese blend",
    "toppings" : ['spicy pepperoni', 'basil', 'red pepper flakes'],
    "slices" : 8,
    "vegetarian" : false,
    "pizzaInfo" : function(){
        console.log("Crust: " + this.crust)
        console.log("Sauce: " + this.sauce)
        console.log("Cheese: " + this.cheese)
        console.log("Toppings: " + this.toppings)
        console.log("Slices: " + this.slices)
        console.log("Vegetarian: " + this.vegetarian)
    }
}

var ronniePizza = {
    "crust" : "thin crust",
    "sauce" : "alfredo",
    "cheese" : "white cheddar",
    "toppings" : ['macaroni', 'bacon', 'avocado'],
    "slices" : 0,
    "vegetarian" : false,
    "pizzaInfo" : function(){
        console.log("Crust: " + this.crust)
        console.log("Sauce: " + this.sauce)
        console.log("Cheese: " + this.cheese)
        console.log("Toppings: " + this.toppings)
        console.log("Slices: " + this.slices)
        console.log("Vegetarian: " + this.vegetarian)
    }
}

chrisPizza.pizzaInfo()
console.log("------------------------------------------------------")
ronniePizza.pizzaInfo()