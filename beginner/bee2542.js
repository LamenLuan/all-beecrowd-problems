let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

let lineIndex = 0

while (lines[lineIndex] !== '') {
	const [numOfMarcoCards, numOfLeoCards] =
		lines[lineIndex + 1].split(' ').map(c => parseInt(c))

	const numOfCards = numOfMarcoCards + numOfLeoCards + 4
	const lastLineIndex = numOfCards + lineIndex - 1
	const chosenAttrIndex = parseInt(lines[lastLineIndex]) - 1

	const [marcoCardIdx, leoCardIdx] =
		lines[lastLineIndex - 1]
			.split(' ')
			.map(c => parseInt(c) - 1)

	const cardsStartIndex = lineIndex + 2
	const marcoCard = lines[cardsStartIndex + marcoCardIdx]
	const marcoPower = parseInt(marcoCard.split(' ')[chosenAttrIndex])

	const leoCard = lines[cardsStartIndex + numOfMarcoCards + leoCardIdx]
	const leoPower = parseInt(leoCard.split(' ')[chosenAttrIndex])

	let message = 'Empate'
	if (marcoPower > leoPower)
		message = 'Marcos'
	else if (leoPower > marcoPower)
		message = 'Leonardo'

	console.log(message)

	lineIndex += numOfCards
}