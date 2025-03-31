var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim()
    .replace(/\n/g, ' ')
    .replace(/  /g, ' ')
    .split(' ')
    .map(i => parseInt(i))

for (let i = 0; i < lines.length;) {
    const assigmentsAmount = lines[i]
    const limit = i + 1 + assigmentsAmount
    
    let total = 0
    let idx = i + 1
    let sum = lines[idx++] 

    for (let j = idx; j < limit; j++) {
        total += lines[j]
    }

    for (; idx < limit; idx++) {
        const sumAux = sum + lines[idx]
        if(sumAux >= total)
            break
        sum = sumAux
        total -= lines[idx]
    }

    let difference = total - sum
    if(difference < 0) difference *= -1

    console.log(difference)
    i += assigmentsAmount + 1
}