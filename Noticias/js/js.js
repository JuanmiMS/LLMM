// Lee json
$.getJSON('Json/noticias.json', function(data) {
    $.each(data.noticia, function(i, f) {
        printNew(f.Titulo, f.cuerpo, f.Noticia, f.Imagen)
    });

});

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

function printNew(titulo, introduccion, texto, imagen) {
console.log("Titulo: "+titulo +"Introducción: "+introduccion+
    "Texto entero: "+texto+"IMG: "+imagen)
}



