var input = require('fs').readFileSync('bee', 'utf8')

const lines = input.trim().split('\n')
const mealsAvailable = lines[0].split(' ').map(n => parseInt(n))
const mealsRequested = lines[1].split(' ').map(n => parseInt(n))

let mealsMissing = 0
for (let i = 0; i < 3; i++) {
	if (mealsRequested[i] > mealsAvailable[i]) {
		mealsMissing += mealsRequested[i] - mealsAvailable[i]
	}
}

console.log(mealsMissing)