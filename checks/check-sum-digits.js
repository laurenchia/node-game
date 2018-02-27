//Fails if sum of all digits IS GREATER THAN 7
module.exports = function (guess) {
	let sum = 0;
	const array = guess.split('');
	const numbersOnly = array.filter(digit => !isNaN(digit));

	for (let i=0; i < numbersOnly.length; i++){
		sum += parseInt(numbersOnly[i]);
	}
	
	return sum < 8;
}
