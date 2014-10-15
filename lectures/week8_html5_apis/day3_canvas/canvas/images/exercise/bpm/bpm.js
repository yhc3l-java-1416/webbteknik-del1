var bpm = ( function() {
	var api = {}, 
		timeBetweenBeats = 0;

	/*
	 * Calculates bpm from the milliseconds between beats
	 */
	api.calculateBpm = function(millisecsBetweenBeats) {
		var bps = 1000 / millisecsBetweenBeats;
		var bpm = bps * 60;
		return bpm;
	};

	
	/*
	 * Calculates timeBetweenBeats based on the interval between taps
	 */
	api.tap = ( function() {
		var oldTap, numberOfTaps = 0, totalTime = 0;
		return function() {
			var newTap = new Date();
			if(oldTap) {
				var timeTaken = (newTap - oldTap);
				if(timeTaken < 1000) {
					totalTime = totalTime + timeTaken;
					numberOfTaps++;
					timeBetweenBeats = (totalTime / numberOfTaps);
				} else {
					totalTime = 0;
					numberOfTaps = 0;
				}
				oldTap = newTap;
			} else {
				oldTap = newTap;
			}
		}
	}());

	/*
	 * Returns the current milliseconds between beats 
	 */
	api.getBeatDistance = function() {
		return timeBetweenBeats;
	};
	/*
	 * Returns the current BPM as a beats per second
	 */
	api.getBPS = function() {
		return 1000 / timeBetweenBeats;
	};
	/*
	 * Returns the current BPM
	 */
	api.getBPM = function() {
		console.log(timeBetweenBeats);
		return api.calculateBpm(timeBetweenBeats);
	};
	
	return api;
}());
