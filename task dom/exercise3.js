function fontType(){
    let font_Type = document.getElementById("font_family").value;
    document.getElementById("text").style.fontFamily  = font_Type;
}
document.getElementById("font_family").onchange = function (){
    fontType()
}
function font_Size(){
    let Size = document.getElementById("font_size").value;
    document.getElementById("text").style.fontSize  = Size;
}
document.getElementById("font_size").onchange = function (){
    font_Size()
}
function fontit(){
    let fontItalic = document.getElementById("font_italic");
    if (fontItalic.checked == true ){
        document.getElementById("text").style.fontStyle = "italic";
    }
    else{
        document.getElementById("text").style.fontStyle = "normal"
    }
    document.getElementById("text").style.fontFamily  = fontItalic;
}
document.getElementById("font_italic").onchange = function (){
    fontit()
}
function fontbld(){
    let fontBold = document.getElementById("font_bold");
    if (fontBold.checked == true ){
        document.getElementById("text").style.fontWeight = "bold";
    }
    else{
        document.getElementById("text").style.fontWeight = "normal"
    }
    document.getElementById("text").style.fontFamily  = fontBold;
}
document.getElementById("font_bold").onchange = function (){
    fontbld();
}
function fontunder(){
    let fontUnline = document.getElementById("font_underline");
    if (fontUnline.checked == true ){
        document.getElementById("text").style.textDecoration = "underline";
    }
    else{
        document.getElementById("text").style.textDecoration = "none"
    }
    document.getElementById("text").style.fontStyle = fontUnline;
}
document.getElementById("font_underline").onchange = function (){
    fontunder();
}