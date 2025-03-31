var input = require('fs').readFileSync('bee', 'utf8')

const lines = input
    .trim()
    .split('\n')

for (let i = 0; i < lines.length; i++) {
    const timeLeft = parseInt(lines[i++]) 
    const timeNeeded = lines[i].split(' ')
        .map(n => parseInt(n))
        .reduce((n1, n2) => n1 + n2)
    console.log(timeNeeded > timeLeft ? 'Deixa para amanha!' : 'Farei hoje!')
}