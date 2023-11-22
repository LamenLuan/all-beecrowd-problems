var input = require('fs').readFileSync('bee', 'utf8');
var lines = input.split('\n')

const numOfQuestions = parseInt(lines[0])
for (let i = 0; i < numOfQuestions; i++)
    console.log('I am Toorg!')