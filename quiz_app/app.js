window.onload = function() {
    leerXML();
};

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

        var questions = [

            new Question(xmlDoc.getElementsByTagName("opcionUno")[0].childNodes[0].nodeValue.toString(), ["Java", "C#","C++", "C"], "C"),
            new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
            new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
            new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
            new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
        ];

// create quiz
        var quiz = new Quiz(questions);

// display quiz
        populate();

    }
}



function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [

    new Question(xmlDoc.getElementsByTagName("opcionUno")[0].childNodes[0].nodeValue, ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





