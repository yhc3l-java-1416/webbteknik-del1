'use strict';
console.log('triv');
var questions = [{
	q: 'What is the capital of Sweden? \n 1) Stockholm \n 2) London \n 3) Malmö',
	a: 1
}, {
	q: 'What is the capital of the UK? \n 1) Stockholm \n 2) London \n 3) Malmö',
	a: 2
}, {
	q: 'What is the most dangerous sport? \n 1) Ice hockey \n 2) Rugby \n 3) Cheese rolling',
	a: 3
}];

var points = 0;
var currentQuestion;
var answer;

var askQuestion = function (question) {
	var answer = prompt(question.q);
	answer = answer.trim();
	answer = Number(answer);
	return answer;
};

var checkAnswer = function (answer, question) {
	if (answer === question.a) {
		alert('Well done');
		points = points + 1;
	} else {
		alert('Bad luck');
	}
};

var showResults = function () {
	alert('You scored ' + points + ' points');
};

var shuffle = function () {
	questions = _.shuffle(questions);
}

shuffle();
for (var i = 0; i < questions.length; i = i + 1) {
	currentQuestion = questions[i];
	answer = askQuestion(currentQuestion);
	checkAnswer(answer, currentQuestion);
}
showResults();