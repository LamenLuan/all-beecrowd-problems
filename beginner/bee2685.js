var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const entries = lines.map(n => parseInt(n))

for (const entry of entries) {
	let message = 'Bom Dia!!'

	if (entry >= 90 && entry < 360) {
		if (entry < 180)
			message = 'Boa Tarde!!'
		else if (entry < 270)
			message = 'Boa Noite!!'
		else
			message = 'De Madrugada!!'
	}

	console.log(message)
}