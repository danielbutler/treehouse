function Quiz() {
  this.questions = [];
  this.nowAskingIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.theAnswer = function(questionNumber){
  return this.questions[questionNumber].answer;
};

Quiz.prototype.renderInElement = function(list, questionNumber) {
  list.innerHTML = "";
  var totalQuestions = this.questions.length;
  list.innerHTML += this.questions[questionNumber].toHTML(questionNumber, totalQuestions);
};
