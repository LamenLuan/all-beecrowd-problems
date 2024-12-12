var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const finalistsMinimum = parseInt(lines[1])
const scoresCount = new Map()

for (let i = 2; i < lines.length; i++) {
	const score = parseInt(lines[i])
	const value = scoresCount.has(score)
		? scoresCount.get(score) + 1
		: 1

	scoresCount.set(score, value)
}

let finalistsChosen = 0
for (let score of [...scoresCount.keys()].sort((a, b) => b - a)) {
	finalistsChosen += scoresCount.get(score)
	if (finalistsChosen >= finalistsMinimum) break;
}

console.log(finalistsChosen)