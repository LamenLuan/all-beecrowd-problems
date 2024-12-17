var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const length = lines.length - 1

let touristsOut = 0
let jeepsOut = 0

for (let idx = 0; idx < length; idx++) {
	const [action, touristsStr] = lines[idx].split(' ')
	const tourists = parseInt(touristsStr)

	if (action === 'SALIDA') {
		jeepsOut++
		touristsOut += tourists
	}
	else {
		jeepsOut--
		touristsOut -= tourists
	}
}

console.log(`${touristsOut}\n${jeepsOut}`)