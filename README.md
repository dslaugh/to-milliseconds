# to-milliseconds
A utility to convert days, hours, minutes, and seconds to milliseconds

## Installation
```
npm install to-milliseconds
```


## Usage
```
const toMilliseconds = require('to-milliseconds');

const ms = toMilliseconds.convert({ days: 3, hours: 6, minutes: 30, seconds: 45 });

const ms = toMilliseconds.convert({ hours: 12, minutes: 15 });

const ms = toMilliseconds.convert({ minutes: 45 });

const ms = toMilliseconds.fromDays(3);

const ms = toMilliseconds.fromHours(6);

const ms = toMilliseconds.fromMinutes(20);

const ms = toMilliseconds.fromSeconds(15);
```