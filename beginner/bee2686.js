var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const entries = lines.map(n => parseFloat(n))

const MINUTE_IN_SECS = 60
const HOUR_IN_SECS = MINUTE_IN_SECS * 60
const START_POINT_HOUR = 6 * HOUR_IN_SECS

for (const entry of entries) {
	const seconds = START_POINT_HOUR + (entry * 240)
	let message

	if (entry < 90)
		message = 'Bom Dia!!'
	else if (entry < 180)
		message = 'Boa Tarde!!'
	else if (entry < 270)
		message = 'Boa Noite!!'
	else
		message = 'De Madrugada!!'

	console.log(`${message}\n${getFormattedTime(seconds)}`)
}

function getFormattedTime(seconds) {
	let hours = Math.floor(seconds / HOUR_IN_SECS)
	if (hours > 23) hours %= 24

	seconds %= HOUR_IN_SECS
	const minutes = Math.floor(seconds / MINUTE_IN_SECS)
	seconds = Math.floor(seconds % MINUTE_IN_SECS)

	const padded = (number) => number > 9 ? `${number}` : `0${number}`

	return `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`
}