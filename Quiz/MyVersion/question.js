function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.toHTML = function(questionNumber, totalQuestions) {
  questionNumber ++;
  htmlString ='<h1>Awesome Quiz</h1>';
  htmlString += '<h2 id="question" class="headline-secondary--grouped">' + this.question + '</h2>';
  htmlString += '<h3 id="score"></h3>';
  htmlString += '<p id="choice0">'+ this.choices[0] + '</p>';
  htmlString += '<button id="guess0" class="btn--default">Select Answer</button>';
  htmlString += '<p id="choice1">'+ this.choices[1] + '</p>';
  htmlString += '<button id="guess1" class="btn--default">Select Answer</button>';
  htmlString += '<footer><p id="progress">Question ' + questionNumber + ' of ' + totalQuestions + '</p></footer>';
  return htmlString;

};
