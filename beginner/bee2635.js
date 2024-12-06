var input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

const N = parseInt(lines[0])
let q = parseInt(lines[N + 1])
let i = N + 2
const limit = i + q

for (; i < limit; i++) {
    let relatedWordSizes = lines.slice(1, N + 1)
        .filter(w => w.startsWith(lines[i]))
        .map(w => w.length)

    if(!relatedWordSizes.length) {
        console.log(-1)
        return
    }

    let biggestWordSize = Math.max(...relatedWordSizes)
    console.log(`${relatedWordSizes.length} ${biggestWordSize}`)
}