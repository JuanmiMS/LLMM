var xmlDoc;
var numPreguntas = 0;

window.onload = function () {
    leerXML();
};


function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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

    for (var i = 0; i < numPreguntas; i++) {

        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('tipo')[0].innerHTML;

        switch (tipo) {
            case "radio":
                crearRadio(i);
                break;
            case "check":
                crearCheck(i);
                break;
            case "text":
                crearText(i);
                break;
            case "select":
                crearSelect(i);
                break;
            default:
                console.log("default");
        }
    }
}


function crearRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

function crearCheck(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var check = document.createElement("input");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name", i);
        check.setAttribute("value", k);
        check.setAttribute('id', k + "check");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

function crearText(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var text = document.createElement("input");

        text.setAttribute("type", "text");
        text.setAttribute("name", i);
        text.setAttribute('id', i + "text");
        div.appendChild(text);

        //TODO esta parte sirve
        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}

function crearSelect(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var select = document.createElement("select");
    select.setAttribute("id",i+"select");
    select.setAttribute("name", i);
    div.appendChild(select);

    //Option inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var option = document.createElement("option");

        option.setAttribute("name", i);
        option.setAttribute("value", k);
        option.setAttribute('id', k + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }
    label.innerHTML = "<br>";

    div.appendChild(label);
}

function checkPreguntas() {

    var numPreg = xmlDoc.getElementsByTagName('pregunta').length;

    for (var i = 0; i < numPreg; i++) {
        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName("tipo")[0].innerHTML;

        if (tipo === "radio") {
            checkRadio(i);
        }
        else if (tipo === "check") {
            checkCheckbox(i);
        }
        else if (tipo === "select") {
            checkSelect(i);
        }
        else if (tipo === "text") {
            checkText(i);
        }
    }
}

function checkRadio(x) {

    var radios = document.getElementsByName(x);
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = radios[z].getAttribute("value");

            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                console.log(z + "- Correctoooo");
            }

            break;
        }
    }
}
function checkCheckbox(x) {

    var contCorrectas = 0;
    var contSeleccionadas = 0;
    var contSelecCorrectas = 0;
    var radios = document.getElementsByName(x);

    //Cuenta cuantas respuestas tienen que ser seleccionadas
    for (var z = 0, length = radios.length; z < length; z++) {
        var preguntaSel = radios[z].getAttribute("value");
        if (xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto")) {
            contCorrectas += 1;
        }

    }

    //Comprobamos cuantas respuestas correctas ha seleccionado el usuario
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
            var preguntaSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                contSelecCorrectas++;
                contSeleccionadas++;
            }
            else {
                contSeleccionadas++;
            }
            // break;
        }
    }

    //Comprobacion final
    if (contSelecCorrectas === contCorrectas && contCorrectas === contSeleccionadas) {
        console.log(x + "- Correctoooo")
    }

}
function checkText(x) {
    try {
        var userAns = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[0].innerHTML;

    if (resp === userAns) {
        console.log(x + "- Correctoooo");
    }
}
function checkSelect(x) {

    var option = document.getElementsByName(x);
   // var respuesta = document.getElementById(x+"select").value;


    for (var z = 0, length = option.length; z < length; z++) {
        if (option[z].selected) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = document.getElementById(x+"select").value;

            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                console.log(z + "- Correctoooo");
            }
            break;
        }
    }
}