// Lee json
$.getJSON('Json/noticias.json', function(data) {
    $.each(data.noticia, function(i, f) {
        console.log(f.Titulo+"--"+f.Noticia);
        // $('#notis').appendTo("#notis");
    });

});



