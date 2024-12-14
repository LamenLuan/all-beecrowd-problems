var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const [A1, A2, A3] = lines.map(n => parseInt(n))

const firstFloor = (A2 * 2) + (A3 * 4)
const secondFloor = (A1 * 2) + (A3 * 2)
const thirdFloor = (A1 * 4) + (A2 * 2)

console.log(Math.min(firstFloor, secondFloor, thirdFloor))