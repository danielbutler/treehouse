function Quiz() {
  this.questions = [];
  this.nowAsking = 1;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.renderQuestions = function(list) {
  // list.innerHTML.empty();
  list.innerHTML = "";
  totalQuestions = this.questions.length;
  list.innerHTML += this.questions[0].toHTML(totalQuestions);
    // console.log(this.nowAsking);
  // }
};
