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
            noticias.appendChild(div);

            var titulo = document.createElement('h1');
            titulo.innerHTML = data.noticia[countNoticia]['Titulo'];
            noticias.appendChild(titulo);

            var cuerpo = document.createElement('p');
            cuerpo.innerHTML = data.noticia[countNoticia]['Cuerpo'];
            noticias.appendChild(cuerpo);

            var noti = document.createElement('p');
            noti.setAttribute('class','oculto');
            noti.setAttribute('display','none');
            noti.innerHTML = data.noticia[countNoticia]['Noticia'];
            noticias.appendChild(noti);

            var img = document.createElement('img');
            img.setAttribute('src', data.noticia[countNoticia]['Imagen']);
            img.setAttribute('class','img-fluid');
            img.setAttribute('alt','pato');
            noticias.appendChild(img);
            countNoticia++;
        });
    }

    else{
        console.log("TODAS LAS NOTICIAS LEIDAS")
    }

}


//Función encargada de desplegar/encoger la noticia
$(function () {
    $('.noticia').click(function () {

        if($('.oculto', this).is(':visible'))
        {
            $('.oculto', this).slideUp();
        }
        else{
            $('.oculto', this).slideDown();
        }
    })
});


$(document).ready(function() {
    var win = $(window);


    //Rellenamos la web de noticias cuando el usuario la carga
    if (($(document).height() - win.height()) === win.scrollTop()) {
        addNoticia();
    }

    //Cada vez que llega al final de la web, carga una noticia más
    win.scroll(function() {
        if (($(document).height() - win.height()) === win.scrollTop()) {
            addNoticia();
        }

    });
});