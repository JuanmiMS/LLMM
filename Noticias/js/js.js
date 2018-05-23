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
            // <div class="noticia">
        // <img src="img/wall.jpg" class="img-fluid" alt="Pato">
        // <h1>NOTICIA 2</h1>
        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        // </p>
        // <p class="oculto" style="display: none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        // </div>

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


//Función encargada de desplegar la noticia
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



