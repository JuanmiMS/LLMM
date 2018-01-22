var visible = true;
function aparecer() {
    if (visible){
        document.getElementById("primera_noticia_texto").setAttribute("style", "display:none;");
        visible = false;
    }
    else{
        document.getElementById("primera_noticia_texto").setAttribute("style", "display:block;");
        visible = true;
    }
}