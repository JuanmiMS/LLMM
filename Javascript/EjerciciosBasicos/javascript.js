//alert('Page loaded!');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*function randomBgColor() {
        var color = getRandomColor();
        //document.body.style.backgroundColor = color;
}*/

function changecolor() {
    document.body.style.backgroundColor = getRandomColor();
    document.getElementsByClassName("celda").style.backgroundColor = getRandomColor();
}

function btnClick() {
    /*var x = document.getElementById("tabla").getElementsByTagName("td");
    x[1].innerHTML = "i want to change my cell color";*/
    $(this).style.backgroundColor = getRandomColor();
}