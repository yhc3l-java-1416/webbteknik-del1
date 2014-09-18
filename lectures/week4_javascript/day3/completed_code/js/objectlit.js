console.log('object literals');
var volvo = {};
volvo.regNumber = 'RDA 488';
volvo.color = 'green';
volvo.steeringWheel = true;
volvo.type = 'saloon';
volvo.tyres = ['pirelli', 'continental'];
volvo.engine = {};
volvo.engine.horsePower = 58;
volvo.engine.cylinders = 6.5;

var saab = {
	"regNumber": "ZBA 321",
	"color": "blue",
	"wheels": ["conti", "bridge"],
	"type": "hatchback",
	"steeringWheel": false,
	"engine": {
		horsePower: 50000,
		cylinders: 54
	}
};

for (var property in saab) {
	if (saab.hasOwnProperty(property)) {
		console.log(property + ' : ' + saab[property]);
	}
}