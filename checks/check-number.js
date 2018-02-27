//Condition 1 - Fails if it IS NOT a number
module.exports = function(guess) {
	return !isNaN(guess);
}
