function pizzaOven(crustType, sauceType, cheeseType, toppings) {
    var pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeseType = cheeseType
    pizza.toppings = toppings
    return pizza
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

var pizza3 = pizzaOven("thin", "arrabiatia", "three cheese blend", ['spicy pepperoni', 'basil', 'red pepper flakes'])
console.log(pizza3)

var pizza4 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni")
console.log(pizza4)

function randomPizza(){
    var crust = ["deep dish", "hand tossed", "thin"]
    var sauce = ["traditional", "marinara", "arrabiatia"]
    var cheese = ["mozzarella", "feta", "three cheese blend"]
    var toppingsOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
    var toppings = []

    toppings.push(toppingsOptions[Math.floor(Math.random() * (toppingsOptions.length))])
    toppings.push(toppingsOptions[Math.floor(Math.random() * (toppingsOptions.length))])

    var pizza = {}
    pizza.crustType = crust[Math.floor(Math.random() * (crust.length))]
    pizza.sauceType = sauce[Math.floor(Math.random() * (sauce.length))]
    pizza.cheeseType = cheese[Math.floor(Math.random() * (cheese.length))]
    pizza.toppings = toppings
    return pizza
}

var aPizza = randomPizza()
console.log(aPizza)