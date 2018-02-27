const checkPrime = require('../checks/check-prime.js');

describe('Check input is a prime number or not', () => {
	it('gives correct pass on prime number', () => {
		expect(checkPrime(5)).toBeTruthy();
	});
	it('gives correct pass on negative prime number', () => {
		expect(checkPrime(-5)).toBeTruthy();
	});
	it('gives correct fail on non prime number', () => {
		expect(checkPrime(64)).toBeFalsy();
	});
});