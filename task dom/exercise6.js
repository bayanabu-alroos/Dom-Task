/*var btn = document.querySelector("#addButton")
var input = document.querySelector("#songTextInput")
var list = document.querySelector("#playlist")
function onClickBtn(event){
    event.preventDefault();
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));


    var button = document.createElement("button");
    button.innerHTML = "Delete"

    button.onclick = function(event){
        li.remove();
    }

    button.style.float ="right";
    button.style.color ="red"
    button.style.backgroundColor = "white"

    li.appendChild(button)
    list.appendChild(li)

    input.value = "";

} */


document.getElementById("addButton").onclick  = function() {

    let node = document.createElement("Li");
    let songName = document.getElementById("songTextInput").value; 
    let textnode=document.createTextNode(songName);
    node.appendChild(textnode);
    document.getElementById("playlist").appendChild(node);
    let button = document.createElement("button");
    let buttonText=document.createTextNode("Delete");
    button.appendChild(buttonText)
    button.addEventListener('click', function(e) {
            node.parentNode.removeChild(node);
        }, false);
    node.appendChild(button)
    document.getElementById("songTextInput").value=''
    }