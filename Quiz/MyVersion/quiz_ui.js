function runQuiz(answer, questionNumber) {
  trueAnswer = quiz.theAnswer(questionNumber);
  if (answer === trueAnswer) {
    console.log("this is the correct answer");
  } else {
    console.log("That was not the correct answer");
  }
}
