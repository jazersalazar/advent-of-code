const fs = require('fs');
const input = fs.readFileSync('../input.txt', 'utf-8').trim().split('');

let currentPosition = 0;
const currentFloor = input.reduce((floor, move, position, arr) => {
	if (move === '(') floor++;
	else floor--;

	if (currentPosition == 0 && floor < 0) {
		currentPosition = position + 1;
	}

	return floor;
}, 0);
console.log(`Santa is currenly on floor ${currentFloor}`);
console.log(`Santa enters the basement at position ${currentPosition}`);
