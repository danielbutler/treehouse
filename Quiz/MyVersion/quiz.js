function Quiz() {
  this.questions = [];
  this.nowAskingIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
}

Quiz.prototype.play = function() {
  var currentQuestion = this.Questions[this.nowAskingIndex];
  currentQuestion.play();
};

Quiz.prototype.nextQuestion = function() {
  this.stop();
  this.nowAskingIndex++;
  if(this.nowAskingIndex === this.Questions.length) {
    // this.nowPlayingIndex = 0;
    console.log("reached end");
  }
  this.play();
};

Quiz.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  var questionNumber = this.nowAskingIndex;
  var totalQuestions = this.questions.length;
  list.innerHTML += this.questions[questionNumber].toHTML(questionNumber, totalQuestions);
};
