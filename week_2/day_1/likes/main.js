console.log("hello JS files connected")

var likes = [9, 12, 9]
function likeCount(element){
    var buttonName = element.id
    if (buttonName == "like1")
    {
        likes[0] += 1
        var h3 = document.querySelector("#like-count1")
        h3.innerText = likes[0] + " like(s)"
    }
    else if (buttonName == "like2")
    {
        likes[1] += 1
        var h3 = document.querySelector("#like-count2")
        h3.innerText = likes[1] + " like(s)"
    }
    else if (buttonName == "like3")
    {
        likes[2] += 1
        var h3 = document.querySelector("#like-count3")
        h3.innerText = likes[2] + " like(s)"
    }
}
