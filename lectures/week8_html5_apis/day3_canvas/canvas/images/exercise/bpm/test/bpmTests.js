try {
	assert.equal(bpm.calculateBpm(500), 120);
	log("bpm", "bpm.calculateBpm", true);
} catch(e) {
	log("bpm", "bpm.calculateBpm <br/>" + e, false);
}

var tapTest = ( function() {
	var count = 0;
	return function() {
		if(count !== 5) {
			bpm.tap();
			
		} else {
			try {
				assert.ok(bpm.getBPM() > 119.8 && bpm.getBPM() < 120.1);
				log("bpm", "bpm.tap & bpm.getBPM", true);
			} catch(e) {
				log("bpm", "bpm.tap & bpm.getBPM<br/>" + e, false);
			}
			try {
				assert.ok(bpm.getBeatDistance() > 495 && bpm.getBeatDistance() < 505);
				log("bpm", "bpm.tap & bpm.getBeatDistance", true);
			} catch(e) {
				log("bpm", "bpm.tap & bpm.getBeatDistance<br/>" + e, false);
			}
			try {
				assert.ok(bpm.getBPS() > 1.95 && bpm.getBPS() < 2.05);
				log("bpm", "bpm.tap & bpm.getBPS", true);
			} catch(e) {
				log("bpm", "bpm.tap & bpm.getBPS<br/>" + e, false);
			}
		}
		count++;
	};
}());

tapTest();
var interval = setInterval(tapTest, 500);
setTimeout(function() {
	clearInterval(interval);
}, 3000);
