let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

lines.pop()
for (let lineIdx = 0; lineIdx < lines.length;) {
	const [numOfLines, numOfColumns] = lines[lineIdx++].split(' ').map(n => parseInt(n))
	const lineLimit = lineIdx + numOfLines
	const inputMatrix = []

	for (; lineIdx < lineLimit; lineIdx++) {
		const line = lines[lineIdx].split(' ')
		const lastIdx = numOfColumns - 1
		line[lastIdx] = line[lastIdx][0]
		inputMatrix.push(line)
	}

	for (let i = 0; i < numOfLines; i++) {
		let line = ''
		const upI = i - 1
		const downI = i + 1
		const canGoUp = upI >= 0
		const canGoDown = downI < numOfLines

		for (let j = 0; j < numOfColumns; j++) {
			let numOfAdjacentOnes = 0
			const leftJ = j - 1
			const rightJ = j + 1
			const canGoLeft = leftJ >= 0
			const canGoRight = rightJ < numOfColumns

			if (inputMatrix[i][j] == '0') {
				if (canGoUp && inputMatrix[upI][j] == '1')
					numOfAdjacentOnes++
				if (canGoDown && inputMatrix[downI][j] == '1')
					numOfAdjacentOnes++
				if (canGoLeft && inputMatrix[i][leftJ] == '1')
					numOfAdjacentOnes++
				if (canGoRight && inputMatrix[i][rightJ] == '1')
					numOfAdjacentOnes++

				line += numOfAdjacentOnes
			}
			else line += '9'
		}

		console.log(line)
	}
}