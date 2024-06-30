function buttonclick(val){
    document.getElementById("screen").value+=val
}

function clearscreen(){
    document.getElementById("screen").value=""
}

function clearone(){
    var screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function equalto(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}