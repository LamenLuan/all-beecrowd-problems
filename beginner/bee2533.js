let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

for (let i = 0; i < lines.length; i++) {
	let sum = 0
	let sumWorkloads = 0
	let gradesAmount = parseInt(lines[i])

	if (!gradesAmount)
		return

	for (let j = 0; j < gradesAmount; j++) {
		let [grade, workLoad] = lines[++i].split(' ').map(elem => parseInt(elem))
		sum += grade * workLoad
		sumWorkloads += workLoad
	}

	let api = sum / sumWorkloads / 100
	console.log(api.toFixed(4))
}