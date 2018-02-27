const checks = require('../checks');

describe('Checks guess against all check functions', () => {
	it('calls check-number function', () => {
		expect(checks('hello')).toBeFalsy();
	});
	it('calls check-odd function', () => {
		expect(checks(6)).toBeFalsy();
	});
	it('calls check-palindrome function', () => {
		expect(checks('123')).toBeFalsy();
	});
	it('calls check-sum-digits function', () => {
		expect(checks('1551')).toBeFalsy();
	});
});