let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

const numOfCases = parseInt(lines[0])

const cases = {
	'min': values => Math.min(...values),
	'max': values => Math.max(...values),
	'mean': values => parseInt(values.reduce((a, b) => a + b) / values.length),
	'eye': values => parseInt(0.3 * values[0] + 0.59 * values[1] + 0.11 * values[2])
}

for (let i = 1, aux = 0; i <= numOfCases; i++, aux++) {
	const idx = i + aux
	const option = lines[idx].trim()
	const values = lines[idx + 1].split(' ').map(v => parseInt(v))
	console.log(`Caso #${i}: ${cases[option](values)}`)
}