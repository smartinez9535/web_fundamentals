console.log("hello world")

async function getDitto()
{
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    var data = await response.json()
    //console.log(data)
    //console.log(data.abilities) // dot notation
    //console.log(data["abilities"]) // bracket notation

    //display id
    var id = document.querySelector(".id")
    id.innerHTML = `ID: ${data.id}`
    //display weight
    var weight = document.querySelector(".weight")
    weight.innerHTML = `Weight: ${data.weight}`
    //display image
    var sprite = document.querySelector(".sprite")
    sprite.src = data.sprites.front_default
    console.log(data.id)
    console.log(data.weight)
    console.log(data.sprites.front_default)
}

async function getPortland()
{
    var response = await fetch("api.openweatherapi.......")
    var data = await response.json()
    console.log(data)
}