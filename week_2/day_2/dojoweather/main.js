console.log("hello JS files connected")

function measurementChange(element){
    var x = document.getElementById("metric").value;
    if (x == 1)
    {
        document.getElementById("1").innerHTML = "24°"
        document.getElementById("2").innerHTML = "18°"
        document.getElementById("3").innerHTML = "27°"
        document.getElementById("4").innerHTML = "19°"
        document.getElementById("5").innerHTML = "21°"
        document.getElementById("6").innerHTML = "16°"
        document.getElementById("7").innerHTML = "26°"
        document.getElementById("8").innerHTML = "21°"
    }
    else if(x == 2)
    {
        document.getElementById("1").innerHTML = "-4°"
        document.getElementById("2").innerHTML = "-8°"
        document.getElementById("3").innerHTML = "-3°"
        document.getElementById("4").innerHTML = "-7°"
        document.getElementById("5").innerHTML = "-6°"
        document.getElementById("6").innerHTML = "-9°"
        document.getElementById("7").innerHTML = "-3°"
        document.getElementById("8").innerHTML = "-6°"
    }
}