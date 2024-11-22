var input = require('fs').readFileSync('bee', 'utf8');

const N = parseInt(input)
const arraySize = N * 2
const limit = Math.pow(10, 16)

for (let k = N; k < limit; k++) {
    let allVenomousRemoved = true
    let arrayLength = arraySize

    for (let idx = k; arrayLength > N; idx += k, arrayLength--) {
        if(idx >= arrayLength)
            idx = idx % arrayLength

        if(idx < N)
        {
            allVenomousRemoved = false
            break
        }
    }

    if(allVenomousRemoved)
    {
        console.log(k + 1)
        break
    }
}