const checkOdd = require('../checks/check-odd.js');

describe('Check input is odd or not', () => {
	it('gives correct pass', () => {
		expect(checkOdd(7)).toBeTruthy();
	});
	it('gives correct fail', () => {
		expect(checkOdd(8)).toBeFalsy();
	});
});