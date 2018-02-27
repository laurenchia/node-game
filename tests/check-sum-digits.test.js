const checkSumDigits = require('../checks/check-sum-digits.js');

describe('Check sum of digits is > 7', () => {
	it('gives correct pass', () => {
		expect(checkSumDigits('1221')).toBeTruthy(); //guesses come in as strings
	});
	it('gives correct fail', () => {
		expect(checkSumDigits('1234')).toBeFalsy(); //guesses come in as strings
	});
});