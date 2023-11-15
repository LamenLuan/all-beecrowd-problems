let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

lines.pop()
for (let i = 0; i < lines.length;) {
	let amountAllowed = 0
	const [peopleAmount, minHeight, maxHeight] = lines[i++].split(' ').map(n => parseInt(n))
	const lineLimit = i + peopleAmount
	for (; i < lineLimit; i++) {
		let height = parseInt(lines[i])
		if (height >= minHeight && height <= maxHeight)
			amountAllowed++
	}
	console.log(amountAllowed)
}