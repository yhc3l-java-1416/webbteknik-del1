'use strict';
triv.ui = {};
triv.ui.askQuestion = function (question) {
	var answer = prompt(question.q);
	answer = answer.trim();
	answer = Number(answer);
	return answer;
};
triv.ui.showResults = function (points) {
	alert('You scored ' + points + ' points');
};
triv.ui.showCorrect = function () {
	alert('Well done');
};
triv.ui.showWrong = function () {
	alert('Bad luck');
};