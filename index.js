function fromSeconds(seconds) {
	return 1000 * seconds;
}

function fromMinutes(minutes) {
	return fromSeconds(60) * minutes;
}

function fromHours(hours) {
	return fromMinutes(60) * hours;
}

function fromDays(days) {
	return fromHours(24) * days;
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
