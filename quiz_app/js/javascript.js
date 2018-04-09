window.onload = function() {
    leerXML();
};

function prueba() {
    document.getElementById("preguntaUno").style.display = "none";
    console.log("none");
    document.getElementById("preguntaDos").style.display = "block";
    console.log("block");
}

function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "preguntas.xml", true);
    xhttp.send();

    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        document.getElementById("uno").innerHTML =
            xmlDoc.getElementsByTagName("opcionUno")[0].childNodes[0].nodeValue;
        document.getElementById("dos").innerHTML =
            xmlDoc.getElementsByTagName("opcionDos")[0].childNodes[0].nodeValue;
        document.getElementById("tres").innerHTML =
            xmlDoc.getElementsByTagName("opcionTres")[0].childNodes[0].nodeValue;
    }
}