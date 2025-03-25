var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')

for (let idx = 1; idx < lines.length; idx++) {
    const element = lines[idx];

    if(!isCarPlate(element)){
        console.log('FAILURE')
        continue
    }

    const lastDigit = parseInt(element[7])
    console.log(getConstraintDay(lastDigit))
}

function getConstraintDay(lastDigit) {
    if(lastDigit == 1 || lastDigit == 2)
        return 'MONDAY'
    else if(lastDigit == 3 || lastDigit == 4)
        return 'TUESDAY'
    else if(lastDigit == 5 || lastDigit == 6)
        return 'WEDNESDAY'
    else if(lastDigit == 7 || lastDigit == 8)
        return 'THURSDAY'
    else if(lastDigit == 9 || lastDigit == 0)
        return 'FRIDAY'
}

function isCarPlate(entry) {
    if(entry.length != 8) return false

    for (let i = 0; i < 3; i++) {
        const letter = entry.charCodeAt(i)
        if(letter < 65 || letter > 90) return false
    }

    if(entry[3] != '-') return false

    for (let i = 4; i < 8; i++) {
        const letter = entry.charCodeAt(i)
        if(letter < 48 || letter > 57) return false
    }

    return true
}
