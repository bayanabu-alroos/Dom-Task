document.getElementById("submitBtn").onclick = function() {validateinput()};
function validateStyle() {
    let pass1 = document.forms["pw"]["password1"].value;
    let pass2 = document.forms["pw"]["password2"].value;
    if (pass1.length < 6) {
    document.getElementById('pw1_check').innerHTML = "you have to enter at least 6 digit!";
    return false;
    }
    else if(pass1 !== pass2){
        document.getElementById('pw2_check').innerHTML = "These passwords don't match";
        return false;
    }
    else{
        return true;
    }
}

