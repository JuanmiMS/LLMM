// var parser = new DOMParser(),
//     xmlDoc = parser.parseFromString(xml, "text/xml");
//
// console.log(xmlDoc.getElementsByTagName('preguntas')[0]);
window.onload = function() {
    //autoLogIn(i,"hey");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            leerXML(this);
        }
    };
    xhttp.open("GET", "preguntas.xml", true);
    xhttp.send();
};



function leerXML() {


    document.write("<form>");
    var x=xmlDoc.getElementsByTagName("pregunta");
    for (i=0;i<x.length;i++)
    {
        document.write(x[i].getElementsByTagName("enunciado")[0].childNodes[0].nodeValue);
        document.write("<br><input type=\"radio\">");
        document.write(x[i].getElementsByTagName("opcionUno")[0].childNodes[0].nodeValue);
        document.write("<br><input type=\"radio\">");
        document.write(x[i].getElementsByTagName("opcionDos")[0].childNodes[0].nodeValue);
        document.write("<br><input type=\"radio\">");
        document.write(x[i].getElementsByTagName("opcionTres")[0].childNodes[0].nodeValue);
    document.write("<br></form>");
    }


}

function autoLogIn(un, pw) {
    document.write("<br>");
    document.write("<br>");document.write("<br>");document.write("<br>");document.write("<br>");

    var form = document.createElement("form");
    var element1 = document.createElement("input");
    element1.type="radio";
    var element2 = document.createElement("input");
    element2.type="radio";
    var element3 = document.createElement("input");
    element3.type="radio";

    form.method = "POST";
    form.action = "login.php";

    element1.value="opcion 1";

    form.appendChild(element1);
    form.appendChild(element2);
    form.appendChild(element3);

    document.body.appendChild(form);

    //form.submit();
}