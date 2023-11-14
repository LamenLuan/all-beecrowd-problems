var input = require('fs').readFileSync('bee', 'utf8');
var lines = input.split('\n')

for (let index = 0; index < lines.length - 1; index++) {
    const numOfClones = parseInt(lines[index]);
    console.log(Math.log2(numOfClones))
}