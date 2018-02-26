//Condition 3 - Fails if it IS NOT a palindrome
module.exports = function (guess) {
	const array = guess.split('');
	const numbersOnly = array.filter(digit => !isNaN(digit));
	const noNegNum = numbersOnly.join('');

	return (noNegNum == noNegNum.split('').reverse().join(''))
}