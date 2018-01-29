window.onload=function(){
    var inf = document.getElementById('imgPrincipal');

    inf.onclick = function(){
        var section = document.getElementsByTagName("p");
        var texto = document.getElementById("texto");
        //Restamos 2 ya que son los párrafos que no pertenecen al main
        var count = section.length -2;
        var newParagraph = "En esta página habían "+count+" párrafos y ahora hay "+(count+1)+" párrafos";

        for (i=0;i<count;i++){
            if (i == count -1){
                var h = document.createElement("p");
                var t = document.createTextNode(newParagraph);
                h.appendChild(t);
                texto.appendChild(h);
                
            }
        }
        
    }
    
}