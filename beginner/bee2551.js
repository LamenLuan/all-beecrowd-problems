let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

lines.pop()
for (let i = 0; i < lines.length;) {
	const trainingAmount = parseInt(lines[i++])
	let record = 0
	let recordBeatenIn = 0

	for (let j = 0; j < trainingAmount; j++) {
		const [duration, distance] = lines[i + j].split(' ').map(n => parseInt(n))
		const velocity = distance / duration
		if (velocity > record) {
			record = velocity
			recordBeatenIn = j + 1
			console.log(recordBeatenIn)
		}
	}

	i += trainingAmount
}
