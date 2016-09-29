function Question(question, choice0, choice1, correctAnswer) {
  this.question = question;
  this.choice0 = choice0;
  this.choice1 = choice1;
  this.correctAnswer = correctAnswer;
}
Question.prototype.toHTML = function() {
  var htmlString = "";
  htmlString += '<h1>Awesome Quiz</h1>';
  htmlString += '<h2 id="question" class="headline-secondary--grouped">' + this.question + '</h2>';
  htmlString += '<h3 id="score"></h3>';
  htmlString += '<p id="choice0">' + this.choice0 + '</p>';
  htmlString += '<button id="guess0" class="btn--default">Select Answer</button>';
  htmlString += '<p id="choice1">' + this.choice1 + '</p>';
  htmlString += '<button id="guess1" class="btn--default">Select Answer</button>';
  htmlString += '<footer><p id="progress">Question ' + quiz.nowAsking + ' of ' + totalQuestions + '</p></footer>';
  return htmlString;
};

var guess0 = document.getElementById("#guess0");
guess0.onclick = function() {
	playlist.play();
};
