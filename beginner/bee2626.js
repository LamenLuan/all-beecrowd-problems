let input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

const loser_against = {
	'pedra': 'tesoura',
	'papel': 'pedra',
	'tesoura': 'papel'
}

const players_winner_messages = [
	"Os atributos dos monstros vao ser inteligencia, sabedoria...",
	"Iron Maiden's gonna get you, no matter how far!",
	"Urano perdeu algo muito precioso..."
]

const tie_message = "Putz vei, o Leo ta demorando muito pra jogar..."

lines.pop()

for (const line of lines) {
	const values = line.split(' ')
	const lastIdx = values.length - 1
	values[lastIdx] = values[lastIdx].replace(/\r?\n|\r/, "");

	const amounts = { 'pedra': 0, 'papel': 0, 'tesoura': 0 }
	values.forEach(v => amounts[v]++)

	const entries = Object.entries(amounts)
		.filter(v => v[1])
		.sort((a, b) => b[1] - a[1])

	if (entries.length == 1 || entries.length == 3) console.log(tie_message)
	else {
		const [most_chosen, least_chosen] = entries.map(e => e[0])
		if (loser_against[most_chosen] == least_chosen) {
			console.log(tie_message)
		}
		else {
			const idx = values.indexOf(least_chosen)
			console.log(players_winner_messages[idx])
		}
	}
}