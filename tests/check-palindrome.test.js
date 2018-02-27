const checkPalindrome = require('../checks/check-palindrome.js');

describe('Check palindrome', () => {
	it('gives correct pass', () => {
		expect(checkPalindrome('1221')).toBeTruthy(); //guesses come in as strings
	});
	it('gives correct fail', () => {
		expect(checkPalindrome('1234')).toBeFalsy(); //guesses come in as strings
	});
});