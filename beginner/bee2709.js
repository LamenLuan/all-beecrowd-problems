var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const length = lines.length - 1

for (let idx = 0; idx < length; idx++) {
	const M = parseInt(lines[idx])
	idx += M + 1

	const N = parseInt(lines[idx])
	const auxIdx = idx - 1
	const auxLimit = auxIdx - M

	let sum = 0
	for (let i = auxIdx; i > auxLimit; i -= N)
		sum += parseInt(lines[i])

	const message = isPrimeNumber(sum)
		? 'You’re a coastal aircraft, Robbie, a large silver aircraft.'
		: 'Bad boy! I’ll hit you.'

	console.log(message)
}

function isPrimeNumber(number) {
	if (number == 1) return false
	const squareValue = Math.sqrt(number)

	for (let i = 2; i <= squareValue; i++)
		if (number % i == 0) return false

	return true
}