console.log("hello JS files connected")

//Event driven - Input driven

function handlesClick(){
    confirm('The h1 has been clicked')
}

function changeColor(element){
    console.log(element)
    element.innerHTML = "changed"
    element.style.backgroundColor = "black"
    element.style.color = "white"
}

var click = 0
function toggleMode(element){
    //Toggle between light and dark
    var container = document.querySelector(".container")
    // Figure out if the container is curretnly in dark mode or light mode
    if(container.classList.contains("light-mode")){
        // container is curretnly in light mode, change to dark mode
        container.classList.remove("light-mode")
        container.classList.add("dark-mode")
    }
    else{
        container.classList.remove("dark-mode")
        container.classList.add("light-mode")
    }
    //increase count of click and show the new number
    click++;
    element.innerHTML = `Toggle Mode ${click}`
}