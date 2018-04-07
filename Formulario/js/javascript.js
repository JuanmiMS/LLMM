var xmlDoc;
var numPreguntas=0;

window.onload = function() {
    leerXML();
};



function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            //Almacenamos la variable global xmlDoc para trabajar con ella
            xmlDoc = this.responseXML;
            numPreguntas = xmlDoc.getElementsByTagName('pregunta').length;

            imprimirPreguntas();
        }
    };
    xhttp.open("POST", "preguntas.xml", true);
    xhttp.send();

}

function imprimirPreguntas() {

    for (var i = 0; i<numPreguntas;i++){

        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('tipo')[0].innerHTML;

        switch(tipo) {
            case "radio":
                crearRadio(i);
                break;
            case "checkbox":
                crearCheck(i);
                break;
            case "selecttext":
                crearText(i);
            case "text":
                crearText(i);
            default:
                console.log("default");
        }


        console.log("------");
    }
}

function crearCheck(i) {

}

function crearSelect() {
    
}

function crearText() {

}

function crearRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;

    for (var k = 0; k<numSol;k++) {
        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;

        var element = document.getElementById("my_form");
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute('id', k);
        element.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question+"<br>";

        element.appendChild(label);
    }
}


function checkPreguntaUno() {

    var radios = document.getElementsByName('uno');

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = radios[i].getAttribute("value");
            console.log("preguntaSel: "+preguntaSel);
            var resp = xmlDoc.getElementsByTagName(preguntaSel)[0].getAttribute("correcto");
            console.log("resp: "+resp);
            if(resp){
                puntosTotales+=1;
                console.log("1- Correctoooo");
            }
            break;
        }
    }
}