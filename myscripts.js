
function show(){
    var p = document.getElementById("pass");
    var btn_text = document.getElementById("show_hide");
    if (p.type === "password")  {
        p.type = "text";
        btn_text.innerHTML = "hide";

    }else{
        p.type = "password";
        btn_text.innerHTML = "show";
    }
}

function hide_container(){
    var checkbox = document.getElementById("check");
    var container = document.getElementById("more");
    if (checkbox.checked == false){
        container.style.display = "none";
    }else{
        container.style.display = "block";
    }
}

