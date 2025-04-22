var input = require('fs').readFileSync('bee', 'utf8')

const lines = input
    .trim()
    .split('\n')

for (let i = 1; i < lines.length; i++) {
    const number = parseInt(lines[i])
    const binary = number.toString(2)

    let biggestGroup = 0
    for (let j = 0; j < binary.length; j += 50) {
        const slice = binary.slice(j, j + 50)
        
        let groupSize = slice[0] == '1' ? 1 : 0
        for (let j = 1; j < slice.length; j++) {
            const element = slice[j];
            if(element == '1') {
                groupSize++
                continue
            }
            
            if(groupSize > biggestGroup)
                biggestGroup = groupSize
            groupSize = 0
        }

        if(groupSize > biggestGroup)
            biggestGroup = groupSize
    }

    console.log(biggestGroup)
}