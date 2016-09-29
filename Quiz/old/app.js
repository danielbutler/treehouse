var quiz = new Quiz();

var questionZero = new Question("What is your name?", "Daniel", "Alfred", 1);
var questionOne = new Question("What is your state?", "Not Kentucky", "Kentucky", 2);
var questionNo = 0;

quiz.add(questionZero);
quiz.add(questionOne);

// var questionElement = document.getElementById("question");
var quizElement = document.getElementById("quiz");

quiz.renderQuestions(quizElement);
