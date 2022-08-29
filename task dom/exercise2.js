function myColor(arr) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    arr.target.style.backgroundColor = "#" + randomColor;
}
document.getElementById("mydiv").addEventListener("click", myColor);


/*
const changeColor = document.getElementById("mydiv");
let i = 0;
const colors =['green' ,'blue' ,'red','purple'];
mydiv.addEventListen('click' , function onClick(){
    mydiv.style.backgroundColor = colors[i];
    i = i >= colors.length -1 ? 0 : i +1 ;
})*/
