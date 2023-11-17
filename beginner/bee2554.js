let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

lines.pop()

for (let lineIdx = 0; lineIdx < lines.length;) {
	const numOfDates = parseInt(lines[lineIdx++].split(' ')[1])
	const lineLimit = lineIdx + numOfDates

	for (; lineIdx < lineLimit; lineIdx++) {
		const [date, ...peoplePresence] = lines[lineIdx].split(' ')
		peoplePresence = peoplePresence.map(n => parseInt(n))

		if (peoplePresence.every(p => p == 1)) {
			console.log(date)
			break
		}
	}

	if (lineIdx == lineLimit)
		console.log('Pizza antes de FdI')
	else
		lineIdx = lineLimit
}