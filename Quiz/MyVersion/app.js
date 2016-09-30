var quiz = new Quiz();

var question1 = new Question("What is your name?", ["Daniel", "Todd"], "Daniel");
var question2 = new Question("Where do you live?", ["Missouri", "Kentucky"], "Kentucky");
var question3 = new Question("Do you wear glasses?", ["Yay", "Nay"], "Yay");

quiz.add(question1);
quiz.add(question2);

var quizElement = document.getElementById("quiz");

quiz.renderInElement(quizElement, quiz.nowAskingIndex);

var guess0Button = document.getElementById("guess0");

guess0Button.onclick = function() {
  // runQuiz(choice0.innerHTML, quiz.nowAskingIndex);
  // quiz.nowAskingIndex ++;
  quiz.renderInElement(quizElement, 0);
  // quiz.nowAskingIndex ++;
  // quiz.renderInElement(quizElement, quiz.nowAskingIndex);
};

var guess1Button = document.getElementById("guess1");

guess1Button.onclick = function() {
  // runQuiz(choice1.innerHTML, quiz.nowAskingIndex);
    quiz.renderInElement(quizElement, 1);
  // quiz.nowAskingIndex ++;
  // quiz.renderInElement(quizElement, quiz.nowAskingIndex);
};
