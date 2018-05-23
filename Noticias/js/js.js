var noticia = 0;
var totalNoticias =0;

// Lee json
$.getJSON('Json/noticias.json', function(data) {
    $.each(data.noticia, function(i, f) {
        totalNoticias++;
    });
});


function addNoticia(){
    if(noticia<totalNoticias){
        $.getJSON('Json/noticias.json', function(data) {
            console.log(data.noticia[noticia]['Titulo'])
            noticia++;
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



