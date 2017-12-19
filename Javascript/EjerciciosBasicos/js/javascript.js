function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function blackscreenIn() {

    document.getElementById('blackscreen').style.display='block';

}
function blackscreenOut() {

    document.getElementById('blackscreen').style.display='none';
    document.getElementById("descripcion").style.display='none';

}

function info(asignatura) {
    var rutaDesc = document.getElementById("descripcion");
    var rutaTexto = document.getElementById("texto");
    blackscreenIn();

    if (asignatura === 'celda ssii'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Sistemas";

    }
    else if (asignatura === 'celda prog'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Programacion";
    }
    else if (asignatura === 'celda llmm'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Lenguaje de marcas";
    }
    else if (asignatura === 'celda fol'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "FOL";
    }
    else if (asignatura === 'celda bbdd'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Base de datos";
    }
    else if (asignatura === 'celda tuto'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Tutoria";
    }
    else if (asignatura === 'celda descanso'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Descanso";
    }
    /*Profesores*/
    else if (asignatura === 'celda descanso'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "Descanso";
    }
    else if (asignatura === 'celda david'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "david";
    }
    else if (asignatura === 'celda rafa'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "rafa";
    }
    else if (asignatura === 'celda jaume'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "jaume";
    }
    else if (asignatura === 'celda ramon'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "ramon";
    }
    else if (asignatura === 'celda mcgonagall'){
        rutaDesc.style.display = 'block';
        rutaTexto.innerHTML = "mcgonagall";
    }
    else{
        alert('Error')
    }
}


$(function() {

    $('.celda').click(function() {
        info($(this).attr('class'));
    });

    $('.ssii').mouseover(function() {
        $(this).css("background-color","#c8ff7c");
    });
    $('.ssii').mouseout(function() {
        $(this).css("background-color","white");
    });

    $('.bbdd').mouseover(function() {
        $(this).css("background-color","#7c14bc");
    });
    $('.bbdd').mouseout(function() {
        $(this).css("background-color","white");
    });
    $('.prog').mouseover(function() {
        $(this).css("background-color","#b635d6");
    });
    $('.prog').mouseout(function() {
        $(this).css("background-color","white");
    });
    $('.llmm').mouseover(function() {
        $(this).css("background-color","#efc0f9");
    });
    $('.llmm').mouseout(function() {
        $(this).css("background-color","white");
    });
    $('.fol').mouseover(function() {
        $(this).css("background-color","#a0a0a0");
    });
    $('.fol').mouseout(function() {
        $(this).css("background-color","white");
    });
    $('.tuto').mouseover(function() {
        $(this).css("background-color","#fffab5");
    });
    $('.tuto').mouseout(function() {
        $(this).css("background-color","white");
    });


    /*Segunda tabla con nombres*/
    $('.david').mouseover(function() {
        $('.david').css("background-color","#b635d6");
        $('.prog').css("background-color","#b635d6");
        $('.tuto').css("background-color","#fffab5");
        $('.llmm').css("color","white");
        $('.bbdd').css("color","white");
        $('.fol').css("color","white");
        $('.ssii').css("color","white");
    });
    $('.david').mouseout(function() {
        $('.david').css("background-color","white");
        $('.prog').css("background-color","white");
        $('.tuto').css("background-color","white");
        $('.llmm').css("color","black");
        $('.bbdd').css("color","black");
        $('.fol').css("color","black");
        $('.ssii').css("color","black");
    });
    $('.rafa').mouseover(function() {
        $('.rafa').css("background-color","#efc0f9");
        $('.llmm').css("background-color","#efc0f9");
        $('.prog').css("color","white");
        $('.tuto').css("color","white");
        $('.bbdd').css("color","white");
        $('.fol').css("color","white");
        $('.ssii').css("color","white");
    });
    $('.rafa').mouseout(function() {
        $('.rafa').css("background-color","white");
        $('.llmm').css("background-color","white");
        $('.prog').css("color","black");
        $('.tuto').css("color","black");
        $('.bbdd').css("color","black");
        $('.fol').css("color","black");
        $('.ssii').css("color","black");
    });
    $('.jaume').mouseover(function() {
        $('.jaume').css("background-color","#7c14bc");
        $('.bbdd').css("background-color","#7c14bc");
        $('.llmm').css("color","white");
        $('.tuto').css("color","white");
        $('.prog').css("color","white");
        $('.fol').css("color","white");
        $('.ssii').css("color","white");
    });
    $('.jaume').mouseout(function() {
        $('.jaume').css("background-color","white");
        $('.bbdd').css("background-color","white");
        $('.llmm').css("color","black");
        $('.tuto').css("color","black");
        $('.prog').css("color","black");
        $('.fol').css("color","black");
        $('.ssii').css("color","black");
    });
    $('.ramon').mouseover(function() {
        $('.ramon').css("background-color","#c8ff7c");
        $('.ssii').css("background-color","#c8ff7c");
        $('.llmm').css("color","white");
        $('.tuto').css("color","white");
        $('.bbdd').css("color","white");
        $('.fol').css("color","white");
        $('.prog').css("color","white");
    });
    $('.ramon').mouseout(function() {
        $('.ramon').css("background-color","white");
        $('.ssii').css("background-color","white");
        $('.llmm').css("color","black");
        $('.tuto').css("color","black");
        $('.bbdd').css("color","black");
        $('.fol').css("color","black");
        $('.prog').css("color","black");
    });
    $('.mcgonagall').mouseover(function() {
        $('.mcgonagall').css("background-color","#a0a0a0");
        $('.fol').css("background-color","#a0a0a0");
        $('.llmm').css("color","white");
        $('.tuto').css("color","white");
        $('.bbdd').css("color","white");
        $('.prog').css("color","white");
        $('.ssii').css("color","white");
    });
    $('.mcgonagall').mouseout(function() {
        $('.mcgonagall').css("background-color","white");
        $('.fol').css("background-color","white");
        $('.llmm').css("color","black");
        $('.tuto').css("color","black");
        $('.bbdd').css("color","black");
        $('.prog').css("color","black");
        $('.ssii').css("color","black");
    });


});

