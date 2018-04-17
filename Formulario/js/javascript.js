var xmlDoc;
var numPreguntas = 0;
var totalPoints = 0;
var isAlreadyCorrect = false;
var isLogged = false;

window.onload = function () {
    leerXML();
    crearLogin();
};

function checkLogin() {

        var user = document.getElementById('usuario').value;
        var pass = document.getElementById('password').value;

        if(user != "" && pass != ""){
            isLogged = true;
            showPreguntas();
        }
        else {
            alert("No puedes dejar los campos vacíos")
        }





}

function showPreguntas(){
    document.getElementById("my_form").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function crearLogin() {
    var element = document.getElementById("login");

    var nameLab = document.createElement('label');
    nameLab.setAttribute('for', "a");
    nameLab.innerHTML = "Usuario: <br>";

    var passLab = document.createElement('label');
    passLab.setAttribute('for', "a");
    passLab.innerHTML = "Contraseña: <br>";


    var br = document.createElement('label');
    var user = document.createElement("input");
    var pass = document.createElement("input");
    var butt = document.createElement("button");

    user.setAttribute("type", "text");
    user.setAttribute("name", "user");
    user.setAttribute('id', "usuario");

    pass.setAttribute("type", "password");
    pass.setAttribute("name", "password");
    pass.setAttribute('id', "password");

    butt.setAttribute("onclick","checkLogin()");

    element.appendChild(nameLab);
    nameLab.appendChild(user);
    nameLab.appendChild(document.createElement("br"));
    element.appendChild(passLab);
    passLab.appendChild(pass);
    passLab.appendChild(document.createElement("br"));
    passLab.appendChild(butt);

    br.innerHTML = "Iniciar sesión<br>";

    butt.appendChild(br);
}



//XML y preguntas
function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

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
            case "range":
                crearRange(i);
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
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";


    //Comprueba si tiene una imagen que mostrar
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen) {
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        img.setAttribute("id", "jirafa");

        div.appendChild(img)
    }
    div.appendChild(enunciado);
    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}

function crearCheck(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
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
        check.setAttribute('id', "div" + i + k + "check");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "check");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

function crearText(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
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
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
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

function crearRange(i) {

    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var range = document.createElement("input");

    range.setAttribute("type", "range");
    range.setAttribute("class","range");
    range.setAttribute("min", 0);
    range.setAttribute("max", 1000);
    range.setAttribute("value", 50);
    range.setAttribute('id', "range"+ i);
    range.setAttribute("oninput", "sliderChange(this.value, this.id)");

    div.appendChild(range);

    var label = document.createElement('label');
    label.setAttribute('for', i);
    label.setAttribute("id","outputrange"+i);
    label.innerHTML = "<br> 0";

    div.appendChild(label);
}

function sliderChange(valor, label) {
    //document.getElementById("output7range").innerHTML = valor;
    document.getElementById("output"+label).innerHTML = valor;

}

function crearPuntuacion() {
    var element = document.getElementById("cabecera");

    var div = document.createElement("div");
    div.setAttribute("id", "puntuacion");
    element.appendChild(div);

    var label = document.createElement('label');
    label.innerHTML = "Puntuacion total:" + totalPoints;
    div.appendChild(label);
}

function checkPreguntas() {

    if (!isAlreadyCorrect) {
        var numPreg = xmlDoc.getElementsByTagName('pregunta').length;
        totalPoints = 0;

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
            else if (tipo === "range") {
                checkRange(i);
            }
        }
        crearPuntuacion();
        document.getElementById("boton").setAttribute("style", "background-color: grey !important");
        document.getElementById("boton").innerText = totalPoints + "/" + numPreg + " preguntas correctas";
        isAlreadyCorrect = true;
    }
    else {
        alert("Examen ya corregido. Recarga la página para volver a intentarlo.")
    }
}

function checkRadio(x) {

    var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = radios[z].getAttribute("value");

            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.backgroundColor = "green";
            }
            else {
                document.getElementById("div" + x).style.backgroundColor = "red";

            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "red";
        }
    }

    var imagen = xmlDoc.getElementsByTagName('pregunta')[x].getElementsByTagName('img')[0];
    if (imagen) {
        var image = document.getElementById("jirafa");
        image.src = "img/jirafa_ans.jpg"

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
        totalPoints++;

        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";

    }

}

function checkText(x) {
    try {
        var userAns = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[0].innerHTML;

    if (resp === userAns) {
        totalPoints++;
        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";

    }
}

function checkSelect(x) {

    var option = document.getElementsByName(x);
    // var respuesta = document.getElementById(x+"select").value;


    for (var z = 0, length = option.length; z < length; z++) {
        if (option[z].selected) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = document.getElementById(x + "select").value;

            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.backgroundColor = "green";
            }
            else {
                document.getElementById("div" + x).style.backgroundColor = "red";

            }
            break;
        }
    }
}

function checkRange(x) {
    var points = document.getElementById("range"+x).value;
    console.log(points);
    var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[0].innerHTML;
    if (points === resp) {
        totalPoints++;
        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";
    }
}
