'use strict';
triv.play = function () {
	var currentQuestion,
		answer,
		points = 0,
		numberOfQuestions = 2;

	for (var i = 0; i < numberOfQuestions; i = i + 1) {
		currentQuestion = triv.questions[i];
		answer = triv.ui.askQuestion(currentQuestion);
		if (triv.logic.checkAnswer(answer, currentQuestion)) {
			points = points + 1;
			triv.ui.showCorrect();
		} else {
			triv.ui.showWrong();
		}
	}

	triv.ui.showResults(points);
};