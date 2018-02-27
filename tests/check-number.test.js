const checkNum = require('../checks/check-number.js');

describe('Check input is a number or not', () => {
	it('gives correct pass on positive number', () => {
		expect(checkNum(7)).toBeTruthy();
	});
	it('gives correct pass on negative number', () => {
		expect(checkNum(-7)).toBeTruthy();
	});
	it('gives correct fail on string', () => {
		expect(checkNum('Hello')).toBeFalsy();
	});
});