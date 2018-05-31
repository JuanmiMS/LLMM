var countNoticia = 0;
var totalNoticias = 0;

// Lee json
$.getJSON('Json/noticias.json', function (data) {
    $.each(data.noticia, function (i, f) {
        totalNoticias++;
    });
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
            img.setAttribute('class', 'img-responsive');
            img.setAttribute('alt', 'pato');
            div.appendChild(img);

            var titulo = document.createElement('h1');
            titulo.innerHTML = data.noticia[countNoticia]['Titulo'];
            div.appendChild(titulo);

            var cuerpo = document.createElement('p');
            cuerpo.innerHTML = data.noticia[countNoticia]['Cuerpo'];
            div.appendChild(cuerpo);

            var divCom = document.createElement('div');
            divCom.setAttribute('class', 'noticiaCompleta');
            divCom.setAttribute('style', 'display: none');
            div.appendChild(divCom);

            var imgCom = document.createElement('img');
            imgCom.setAttribute('src', data.noticia[countNoticia]['Imagen']);
            imgCom.setAttribute('class', 'img-responsive');
            imgCom.setAttribute('style','float: left;');
            imgCom.setAttribute('alt', 'pato');
            divCom.appendChild(imgCom);


            var tituloComp = document.createElement('h1');
            titulo.innerHTML = data.noticia[countNoticia]['Titulo'];
            divCom.appendChild(tituloComp);


            var noti = document.createElement('p');
            noti.innerHTML = data.noticia[countNoticia]['Noticia'];
            divCom.appendChild(noti);

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
    $(".noticiaCompleta", des).dialog({
        minHeight: $(window).height() - 500,
        minWidth: $(window).width() - 800,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: 'drop',
    });
    $(".noticiaCompleta", des).dialog('open');

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        addNoticia();
    });

});