console.log("page loaded...");

var connectionRequests = 2
var connections = 418

function editProfile()
{
    var h1 = document.querySelector(".card-body h1")
    h1.innerText = "Lisa Smith"
}

function resolveConnect(element)
{
    var buttonName = element.id
    if (buttonName == "accept1")
    {
        connectionRequests -= 1
        connections += 1
        var h3 = document.querySelector("#badge-requests")
        h3.innerText = connectionRequests
        h3 = document.querySelector("#badge-connections")
        h3.innerText = connections
        var myObj = document.getElementById('item1')
        console.log(myObj)
        myObj.remove()
    }
    else if (buttonName == "reject1")
    {
        connectionRequests -= 1
        var h3 = document.querySelector("#badge-requests")
        h3.innerText = connectionRequests
        var myObj = document.getElementById('item1')
        console.log(myObj)
        myObj.remove()
    }
    else if (buttonName == "accept2")
    {
        connectionRequests -= 1
        connections += 1
        var h3 = document.querySelector("#badge-requests")
        h3.innerText = connectionRequests
        h3 = document.querySelector("#badge-connections")
        h3.innerText = connections
        var myObj = document.getElementById('item2')
        console.log(myObj)
        myObj.remove()
    }
    else if (buttonName == "reject2")
    {
        connectionRequests -= 1
        var h3 = document.querySelector("#badge-requests")
        h3.innerText = connectionRequests
        var myObj = document.getElementById('item2')
        console.log(myObj)
        myObj.remove()
    }
}