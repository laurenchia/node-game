const checkOddDigitsSumEven = require('../checks/check-odd-digits-even.js');

describe('Check odd digits and sums to even number', () => {
	it('gives correct pass on odd digits and even sum', () => {
		expect(checkOddDigitsSumEven('1331')).toBeTruthy();
	});
	//Note: ignores negative when sums digits
	it('gives correct pass on negative odd digits and even sum', () => {
		expect(checkOddDigitsSumEven('-1331')).toBeTruthy();
	});
	it('gives correct fail on even digits', () => {
		expect(checkOddDigitsSumEven('121')).toBeFalsy();
	});
	it('gives correct fail on odd sum', () => {
		expect(checkOddDigitsSumEven('111')).toBeFalsy();
	});
});