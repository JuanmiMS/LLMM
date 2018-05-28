var countNoticia = 0;
var totalNoticias =0;

// Lee json
$.getJSON('Json/noticias.json', function(data) {
    $.each(data.noticia, function(i, f) {
        totalNoticias++;
    });
});

function addNoticia(){
    if(countNoticia<totalNoticias){
        $.getJSON('Json/noticias.json', function(data) {

            var noticias = document.getElementById('noticias');
            var div = document.createElement('div');
            div.setAttribute('class','noticia');
            div.setAttribute('onclick','desplegar(this)');
            noticias.appendChild(div);

            var img = document.createElement('img');
            img.setAttribute('src', data.noticia[countNoticia]['Imagen']);
            img.setAttribute('class','img-fluid');
            img.setAttribute('alt','pato');
            div.appendChild(img);

            var titulo = document.createElement('h1');
            titulo.innerHTML = data.noticia[countNoticia]['Titulo'];
            div.appendChild(titulo);

            var cuerpo = document.createElement('p');
            cuerpo.innerHTML = data.noticia[countNoticia]['Cuerpo'];
            div.appendChild(cuerpo);

            var noti = document.createElement('p');
            noti.setAttribute('class','oculto');
            noti.setAttribute('style','display: none');
            noti.innerHTML = data.noticia[countNoticia]['Noticia'];
            div.appendChild(noti);

            countNoticia++;
        });
    }

    //TODO arreglar fin de pagina
    else{
        console.log("TODAS LAS NOTICIAS LEIDAS");

        // var fin = document.getElementById('noticias');
        // var div2 = document.createElement('div');
        // div2.setAttribute('class','noticia');
        // fin.appendChild(div2);
        //
        // var titulo2 = document.createElement('h1');
        // titulo2.innerHTML = "TODAS LAS NOTICIAS CARGADAS";
        // div2.appendChild(titulo2);
    }

}


function desplegar(des){
    console.log("entra");
    if($('.oculto', des).is(':visible'))
    {
        $('.oculto', des).slideUp();
    }
    else{
        $('.oculto', des).slideDown();
    }
}


$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        addNoticia();
    });

});