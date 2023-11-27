var input = require('fs').readFileSync('bee', 'utf8');
var lines = input.split('\n')

const songs = {
    0: 'PROXYCITY',
    1: 'P.Y.N.G.',
    2: 'DNSUEY!',
    3: 'SERVERS',
    4: 'HOST!',
    5: 'CRIPTONIZE',
    6: 'OFFLINE DAY',
    7: 'SALT',
    8: 'ANSWER!',
    9: 'RAR?',
    10: 'WIFI ANTENNAS'
}

const numOfTestCases = parseInt(lines[0])

for (let i = 1; i < numOfTestCases + 1; i++) {
    const [num1, num2] = lines[i].split(' ').map(n => parseInt(n))
    console.log(songs[num1 + num2])
}