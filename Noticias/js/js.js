// Lee json
$.getJSON('Json/noticias.json', function(data) {
    $.each(data.noticia, function(i, f) {
        console.log(f.Titulo+"--"+f.Noticia);
        // $('#notis').appendTo("#notis");
    });

});

$('#desplegar').toggle(

    // Primer click
    function(e){
        $('#respuesta-ej5').slideDown();
        $(this).text('Leer mas');
        e.preventDefault();
    }, // Separamos las dos funciones con una coma

    // Segundo click
    function(e){
        $('#respuesta-ej5').slideUp();
        $(this).text('Leer menos');
        e.preventDefault();
    }

);


