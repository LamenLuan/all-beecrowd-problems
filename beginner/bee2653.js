var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const jewelSet = new Set(lines)

console.log(jewelSet.size)