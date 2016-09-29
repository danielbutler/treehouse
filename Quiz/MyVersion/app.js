var quiz = new Quiz();

var question1 = new Question("What is your name?", ["Daniel", "Todd"], "Daniel");
var question1 = new Question("Where do you live?", ["Missouri", "Kentucky"], "Kentucky");

quiz.add(question1);
quiz.add(question1);

var quizElement = document.getElementById("quiz");

quiz.renderInElement(quizElement);

var guess0Button = document.getElementById("guess0");
guess0.onclick = function() {
  runQuiz(choice0.innerHTML);
};

var guess0Button = document.getElementById("guess1");
guess1.onclick = function() {
  runQuiz(choice1.innerHTML);
};
