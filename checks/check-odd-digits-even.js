//Digits need to be odd but sum of those digits needs to be even
module.exports = function(guess) {
	let sum = 0;
	const array = guess.split('');
	const numbersOnly = array.filter(digit => !isNaN(digit));
	
	//Checks odd digits
	for (let i = 0; i < numbersOnly.length; i++){
		if (numbersOnly[i] % 2 == 0){
			return false;
		}
	}
	//Adds sum of odd digits
	for (let i=0; i < numbersOnly.length; i++){
		sum += parseInt(numbersOnly[i]);

	}
	//Returns boolean if sum of digits is even or not
	return sum % 2 == 0;
}	

	
