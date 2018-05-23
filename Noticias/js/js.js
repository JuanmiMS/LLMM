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
            console.log(data.noticia[countNoticia]['Titulo']);

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

    else{
        console.log("TODAS LAS NOTICIAS LEIDAS")
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
    var win = $(window);


    //Rellenamos la web de noticias cuando el usuario la carga
    if (($(document).height() === win.height())) {
        addNoticia();
    }

    //Cada vez que llega al final de la web, carga una noticia más
    win.scroll(function() {
        if (($(document).height() - win.height()) === win.scrollTop()) {
            addNoticia();
        }

    });
});