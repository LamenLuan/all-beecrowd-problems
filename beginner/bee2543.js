let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

let numLines = lines.map(l => l.split(' ').map(n => parseInt(n)))

let lineIndex = 0
while (!isNaN(numLines[lineIndex][0])) {
	let [numOfGames, universityId] = numLines[lineIndex]
	let gameOcurrences = 0
	for (let idx = 1; idx <= numOfGames; idx++) {
		let [id, game] = numLines[lineIndex + idx]
		if (universityId == id && game === 0)
			gameOcurrences++
	}
	lineIndex += numOfGames + 1
	console.log(gameOcurrences)
}