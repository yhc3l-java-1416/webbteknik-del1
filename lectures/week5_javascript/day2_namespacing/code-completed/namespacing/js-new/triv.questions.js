'use strict';
triv.questions = (function () {
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
	questions = _.shuffle(questions);
	return questions;
}());