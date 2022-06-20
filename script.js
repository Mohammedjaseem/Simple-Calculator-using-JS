function buttonclick(val){
    document.getElementById("screen").value += val;
}
function clearScreen(){
    document.getElementById("screen").value = "";
}

function equalClick(){
    var x = document.getElementById("screen").value;
    var y = eval(x);
    document.getElementById("screen").value = y;
}
