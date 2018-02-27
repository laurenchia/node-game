const checkOddDigitsEven = require('./check-odd-digits-even');
const checkSumOfDigits = require('./check-sum-digits');
const notANumber = require('./check-number');
const notOdd = require('./check-odd');
const palindrome = require('./check-palindrome');
const prime = require('./check-prime');


module.exports = function(guess) {
	let result = true;

	const checks = [notANumber, /*prime,*/ checkOddDigitsEven/*, notOdd, palindrome, checkSumOfDigits*/];

	for (let i = 0; i < checks.length; i++){
		const fn = checks[i];
		result = fn(guess);
		if (result == false) {
			break;
		}
	}	

	return result;
};
