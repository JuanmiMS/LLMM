var countNoticia = 0;
var totalNoticias = 0;

// Lee json
$.getJSON('Json/noticias.json', function (data) {
    $.each(data.noticia, function (i, f) {
        totalNoticias++;
    });
});


$(function () {

});


function addNoticia() {
    if (countNoticia < totalNoticias) {
        $.getJSON('Json/noticias.json', function (data) {

            var noticias = document.getElementById('noticias');
            var div = document.createElement('div');
            div.setAttribute('class', 'noticia col');
            div.setAttribute('onclick', 'mostrar(this)');
            noticias.appendChild(div);

            var img = document.createElement('img');
            img.setAttribute('src', data.noticia[countNoticia]['Imagen']);
            img.setAttribute('class', 'img-fluid');
            img.setAttribute('alt', 'pato');
            div.appendChild(img);

            var titulo = document.createElement('h1');
            titulo.innerHTML = data.noticia[countNoticia]['Titulo'];
            div.appendChild(titulo);

            var cuerpo = document.createElement('p');
            cuerpo.innerHTML = data.noticia[countNoticia]['Cuerpo'];
            div.appendChild(cuerpo);

            var noti = document.createElement('p');
            noti.setAttribute('class', 'noticiaCompleta');
            noti.setAttribute('style', 'display: none');
            noti.innerHTML = data.noticia[countNoticia]['Noticia'];
            div.appendChild(noti);

            countNoticia++;
        });
    }

    //TODO arreglar fin de pagina
    else {
        console.log("TODAS LAS NOTICIAS LEIDAS");
    }

}

//TODO fix abrir 2
function mostrar(des) {
    if ($('.noticiaCompleta', des).is(':visible')) {
        $( ".noticiaCompleta", des).dialog('close');

    }
    else {
        $( ".noticiaCompleta", des).dialog({
            minHeight: $( window ).height() -500,
            minWidth: $( window ).width() -500,
            show: 'fade', hide: 'drop',
        });

        $( ".noticiaCompleta", des).dialog(open);
    }


}


$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        addNoticia();
    });

});