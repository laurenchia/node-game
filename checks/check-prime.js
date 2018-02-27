//Checks if prime number
module.exports = function(guess) {
	for(var i = 2; i < guess; i++) {
    	if (guess % i === 0) {
    		return false;
		}
 	}
	return guess !== 1;
}