var input = require('fs').readFileSync('bee', 'utf8')
let lines = input.split('\n')

const spellTable = {
    'fire': {
        'damage': 200,
        1: 20,
        2: 30,
        3: 50
    },
    'water': {
        'damage': 300,
        1: 10,
        2: 25,
        3: 40
    },
    'earth': {
        'damage': 400,
        1: 25,
        2: 55,
        3: 70
    },
    'air': {
        'damage': 100,
        1: 18,
        2: 38,
        3: 60
    }
}

for (let idx = 1; idx + 1 < lines.length; idx += 2) {
    const [ w, h, x0, y0 ] = lines[idx].split(' ').map(i => parseInt(i))
    const spellDataArray = lines[idx + 1].split(' ')
    const spellIdentifier = spellDataArray.shift()
    const [ N, cx, cy ] = spellDataArray.map(i => parseInt(i))
    const spellInfo = spellTable[spellIdentifier]
    const radius = spellInfo[N]
    const damage = spellInfo['damage']

    var reach = 
        checkIfReaches(cx, cy, radius, x0, y0, w, h) ||
        checkIfIsInside(cx, cy, radius, x0, y0, w, h) || 
        checkIfPartiallyInside(cx, cy, radius, x0, y0, w, h)

    console.log(reach ? damage : 0)
}

function checkIfPartiallyInside (cx, cy, radius, x0, y0, w, h) {
    if(x0 <= cx && x0 + w >= cx) {
        if(cy >= y0 + h)
            return cy - radius <= y0 + h
        else
            return cy + radius >= y0
    }

    return false
}

function checkIfReaches (cx, cy, radius, x0, y0, w, h) {
    const maxHeigth = y0 + h
    const maxWidth = x0 + w

    var isReaching = (x, y) =>
    {
        const distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2))
        return radius >= distance
    }

    return isReaching(x0, y0) ||
        isReaching(maxWidth, y0) ||
        isReaching(x0, maxHeigth) ||
        isReaching(maxWidth, maxHeigth)
}

function checkIfIsInside (cx, cy, radius, x0, y0, w, h) {
    var isInside = (x, y) => {
        return x >= x0 && x <= x0 + w && y >= y0 && y <= y0 + h
    }

    return isInside(cx + radius, cy) ||
        isInside(cx - radius, cy) ||
        isInside(cx, cy + radius) ||
        isInside(cx, cy - radius)
}