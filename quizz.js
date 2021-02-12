// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    
    return this.answer === choice;
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

// create questions here
var questions = [
    new Question("20th August is celebrated as?", ["Earth Day", "Sadbhavana divas","No tobacco Day", "None of these"], "Sadbhavana divas"),
    new Question("Who is the father of Geometry?", ["Aristotle", "Euclid", "Pythagoras", "Kepler"], "Euclid"),
    new Question("Which of the following is used in pencils?", ["Graphite", "Silicon","Charcoal", "Phosphorous"], "Graphite"),
    new Question("Air is a/an?", ["Compound", "Element", "Electrolyte", "Mixture"], "Mixture"),
    new Question("1397 * 1397", ["1951609", "1981709", "18362619", "2031719"], "1951609"),
    new Question("The last day of a century cannot be", ["Monday", "Wednesday", "Tuesday", "Friday"], "Tuesday"),
    new Question("'Dandia' is a popular dance of", ["Punjab", "Gujarat", "Tamilnadu", "Maharastra"], "Gujarat"),
    new Question("3251 + 587 + 369 - ? = 3007", ["1250", "1300", "1375", "1200"], "1200"),
    new Question("Bromine is a", ["Black Solid", "Red liquid", "colourless gas", "Highly inflammable gas"], "Red liquid"),
    new Question("In HTML input tag is", ["a format tag", "an empty tag", "all of the above", "none of the above"], "an empty tag")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();