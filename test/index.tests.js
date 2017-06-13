const toMilliseconds = require('../index');
const { expect } = require('chai');

describe('toMilliseconds', function() {
	describe('#fromSeconds', function() {
		it('should convert seconds to milliseconds', function() {
			const expected = 5000;
			const actual = toMilliseconds.fromSeconds(5);
			expect(actual).to.equal(expected);
		});

		it('should convert a string representation of a number to a number then return milliseconds', function() {
			const expected = 3000;
			const actual = toMilliseconds.fromSeconds('3');
			expect(actual).to.equal(expected);
		});

		it('should throw an error if the argument is not a number or a string that can be converted to a number', function() {
			expect(() => toMilliseconds.fromSeconds({})).to.throw();
			expect(() => toMilliseconds.fromSeconds([])).to.throw();
			expect(() => toMilliseconds.fromSeconds('hello')).to.throw();
		});
	});

	describe('#fromMinutes', function() {
		it('should convert minutes to milliseconds', function() {
			const expected = 300000;
			const actual = toMilliseconds.fromMinutes(5);
			expect(actual).to.equal(expected);
		});

		it('should convert a string representation of a number to a number then return milliseconds', function() {
			const expected = 180000;
			const actual = toMilliseconds.fromMinutes('3');
			expect(actual).to.equal(expected);
		});

		it('should throw an error if the argument is not a number or a string that can be converted to a number', function() {
			expect(() => toMilliseconds.fromMinutes({})).to.throw();
			expect(() => toMilliseconds.fromMinutes([])).to.throw();
			expect(() => toMilliseconds.fromMinutes('hello')).to.throw();
		});
	});

	describe('#fromHours', function() {
		it('should convert hours to milliseconds', function() {
			const expected = 18000000;
			const actual = toMilliseconds.fromHours(5);
			expect(actual).to.equal(expected);
		});

		it('should convert a string representation of a number to a number then return milliseconds', function() {
			const expected = 10800000;
			const actual = toMilliseconds.fromHours('3');
			expect(actual).to.equal(expected);
		});

		it('should throw an error if the argument is not a number or a string that can be converted to a number', function() {
			expect(() => toMilliseconds.fromHours({})).to.throw();
			expect(() => toMilliseconds.fromHours([])).to.throw();
			expect(() => toMilliseconds.fromHours('hello')).to.throw();
		});
	});

	describe('#fromDays', function() {
		it('should convert days to milliseconds', function() {
			const expected = 432000000;
			const actual = toMilliseconds.fromDays(5);
			expect(actual).to.equal(expected);
		});

		it('should convert a string representation of a number to a number then return milliseconds', function() {
			const expected = 259200000;
			const actual = toMilliseconds.fromDays('3');
			expect(actual).to.equal(expected);
		});

		it('should throw an error if the argument is not a number or a string that can be converted to a number', function() {
			expect(() => toMilliseconds.fromDays({})).to.throw();
			expect(() => toMilliseconds.fromDays([])).to.throw();
			expect(() => toMilliseconds.fromDays('hello')).to.throw();
		});
	});

	describe('#convert', function() {
		it('should convert days, hours, minutes, seconds to milliseconds', function() {
			const expected = 450305000;
			const actual = toMilliseconds.convert({ days: 5, hours: 5, minutes: 5, seconds: 5});
			expect(actual).to.equal(expected);
		});

		it('should work for any combination of days, hours, minutes, and seconds', function() {
			const expected1 = 18300000;
			const actual1 = toMilliseconds.convert({ hours: 5, minutes: 5});

			const expected2 = 432005000;
			const actual2 = toMilliseconds.convert({ days: 5, seconds: 5});

			const expected3 = 18000000;
			const actual3 = toMilliseconds.convert({ hours: 5 });

			expect(actual1).to.equal(expected1);
			expect(actual2).to.equal(expected2);
		});
	});
});