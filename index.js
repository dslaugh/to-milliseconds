function typeCheck(val) {
	let returnValue = val;
	if (typeof returnValue === 'string') {
		returnValue = parseInt(val, 10);
	}

	if (isNaN(returnValue) || typeof returnValue !== 'number') {
		throw new Error('Invalid argument type');
	}
	return returnValue;
}

function fromSeconds(seconds) {
	const checkedSeconds = typeCheck(seconds);
	return 1000 * checkedSeconds;
}

function fromMinutes(minutes) {
	const checkedMinutes = typeCheck(minutes);
	return fromSeconds(60) * checkedMinutes;
}

function fromHours(hours) {
	const checkedHours = typeCheck(hours);
	return fromMinutes(60) * checkedHours;
}

function fromDays(days) { 
	return fromHours(24) * typeCheck(days);
}

function convert({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
	return [
		fromDays(days),
		fromHours(hours),
		fromMinutes(minutes),
		fromSeconds(seconds)
	].reduce((total, curr) => total + curr, 0);
		
}

module.exports = {
	fromSeconds,
	fromMinutes,
	fromHours,
	fromDays,
	convert,
};
