var input = require('fs').readFileSync('bee', 'utf8');
var lines = input.split('\n');

for (let lineIndex = 0; lineIndex < lines.length;) {
	let [numOfCitizens, numOfQueries] = lines[lineIndex++].split(' ').map(e => parseInt(e))
	let citizens = []

	for (let i = 0; i < numOfCitizens; i++)
		citizens.push(parseInt(lines[lineIndex++]))

	citizens.sort((a, b) => b - a)

	for (let i = 0; i < numOfQueries; i++) {
		let index = parseInt(lines[lineIndex++]) - 1
		console.log(citizens[index])
	}
}